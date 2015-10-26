/*
 ***************************************************************************
 * Ralink Tech Inc.
 * 4F, No. 2 Technology 5th Rd.
 * Science-based Industrial Park
 * Hsin-chu, Taiwan, R.O.C.
 *
 * (c) Copyright 2002-2006, Ralink Technology, Inc.
 *
 * All rights reserved. Ralink's source code is an unpublished work and the
 * use of a copyright notice does not imply otherwise. This source code
 * contains confidential trade secret material of Ralink Tech. Any attempt
 * or participation in deciphering, decoding, reverse engineering or in any
 * way altering the source code is stricitly prohibited, unless the prior
 * written consent of Ralink Technology, Inc. is obtained.
 ***************************************************************************

    Module Name:
    wdg_main.c

    Abstract:

    Revision History:
    Who         When            What
    --------    ----------      ----------------------------------------------
    Name        Date            Modification logs
    Steven Liu  2007-01-08      Initial version
*/

#include <linux/config.h>
#include <linux/version.h>
#include <linux/module.h>
#include <linux/types.h>
#include <linux/kernel.h>
#include <linux/init.h>
#include <linux/timer.h>
#include <asm/system.h>
#include <asm/uaccess.h>
#include "wdg_main.h"

struct timer_list wdg_timer;

/* 
 * System Clock = CPU Clock/2
 * Load Value Unit is 10ms
 * 233MHz: Unit=1/(116M/16384)=0.0001412 Sec, 10ms / 0.0001412 = 71 
 * 250MHz: Unit=1/(125M/16384)=0.0001311 Sec, 10ms / 0.0001311 = 76
 * 266MHz: Unit=1/(133M/16384)=0.0001231 Sec, 10ms / 0.0001231 = 81
 * 280MHz: Unit=1/(140M/16384)=0.0001170 Sec, 10ms / 0.0001170 = 85
 * 300MHz: Unit=1/(150M/16384)=0.0001092 Sec, 10ms / 0.0001092 = 92
 */
#ifdef CONFIG_RT2880_CPU_233MHZ
static int wdg_load_value = CONFIG_RALINK_WDG_TIMER * 71;
#elif CONFIG_RT2880_CPU_250MHZ
static int wdg_load_value = CONFIG_RALINK_WDG_TIMER * 76;
#elif CONFIG_RT2880_CPU_266MHZ
static int wdg_load_value = CONFIG_RALINK_WDG_TIMER * 81;
#elif CONFIG_RT2880_CPU_280MHZ
static int wdg_load_value = CONFIG_RALINK_WDG_TIMER * 85;
#elif CONFIG_RT2880_CPU_300MHZ
static int wdg_load_value = CONFIG_RALINK_WDG_TIMER * 92;
#endif

static inline void setup_timer(struct timer_list * timer,
                               void (*function)(unsigned long),
                               unsigned long data)
{
   timer->function = function;
   timer->data = data;
   init_timer(timer);
}

static void start_refresh_timer_load(unsigned long unused)
{
    sysRegWrite(TMR1LOAD, wdg_load_value);

    wdg_timer.expires = jiffies + HZ * WDG_REFRESH_INTERVAL/100;
    add_timer(&wdg_timer);
}

static void set_timer_ebl(unsigned int ebl)
{
    unsigned int result;

    result=sysRegRead(TMR1CTL);

    if(ebl==1){
	result |= (1<<7);
    }else {
	result &= ~(1<<7);
    }

    sysRegWrite(TMR1CTL,result);
}


static void set_timer_clock_prescale(enum timer_clock_freq prescale)
{
    unsigned int result;

    result=sysRegRead(TMR1CTL);
    result &= ~0xF;
    result=result | (prescale&0xF);
    sysRegWrite(TMR1CTL,result);

}

static void set_timer_mode(enum timer_mode mode)
{
    unsigned int result;
    
    result=sysRegRead(TMR1CTL);
    result &= ~(0x3<<4);
    result=result | (mode << 4);
    sysRegWrite(TMR1CTL,result);

}

static int32_t wdg_init_module(void)
{
    printk("Load RT2880 WatchDog Module\n");

    setup_timer(&wdg_timer, start_refresh_timer_load, 0);
    set_timer_mode(WATCHDOG);
    set_timer_clock_prescale(SYS_CLK_DIV16384);
    start_refresh_timer_load(wdg_load_value);
    set_timer_ebl(1);

    return 0;
}

static void wdg_cleanup_module(void)
{
    printk("Unload RT2880 WatchDog Module\n");
    set_timer_ebl(0);
    del_timer(&wdg_timer);
}

module_init(wdg_init_module);
module_exit(wdg_cleanup_module);

MODULE_DESCRIPTION("Ralink WatchDog Module");
MODULE_AUTHOR("Steven Liu");
MODULE_LICENSE("GPL");
