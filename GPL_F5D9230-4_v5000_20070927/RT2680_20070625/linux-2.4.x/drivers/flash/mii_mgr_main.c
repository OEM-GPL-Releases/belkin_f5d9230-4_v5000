#include <linux/config.h>
#include <linux/module.h>
#include <linux/types.h>
#include <linux/kernel.h>
#include <linux/init.h>
#include <asm/system.h>
#include <asm/uaccess.h>


#if defined(CONFIG_RALINK_RT2880_VER_A)
#define RT2880_ETH_BASE     0xA0310000
#elif defined(CONFIG_RALINK_RT2880_VER_B)
#define RT2880_ETH_BASE     0xA0400000
#else
#error Please Choice Chip Version (A/B)
#endif

#define RT2880_MDIO_ACCESS         RT2880_ETH_BASE+0x00
#define RT2880_MDIO_CFG            RT2880_ETH_BASE+0x04

#define RT2880_MDIO_ACCESS_R     le32_to_cpu(*(volatile u_long *)(RT2880_MDIO_ACCESS))
#define RT2880_MDIO_CFG_R  	 le32_to_cpu(*(volatile u_long *)(RT2880_MDIO_CFG))

unsigned int mii_mgr_read(unsigned int phy_addr, unsigned int phy_register, unsigned int * read_data)
{
    unsigned int volatile status;
    unsigned int volatile ii, t_start;
    t_start = jiffies;
    // clear previous rw_ok status
    while (1) {
        if (!(RT2880_MDIO_ACCESS_R & (0x1 << 31))) {
            break;
        } else if ( (jiffies - t_start) > (5 * HZ)) {
            printk("\n MDIO Read/Write operation is ongoing !!\n");
            return 0;
        }
    }
    RT2880_MDIO_ACCESS_R = 0;
    ii = 0;
    ii = (phy_addr << 24) | (phy_register << 16);
    //printk("\n Set Command [0x%08X] to PHY !!\n",ii);
    RT2880_MDIO_ACCESS_R = ii;
    ii |= (1 << 31);
    RT2880_MDIO_ACCESS_R = ii;
    t_start = jiffies;
    // clear previous rw_ok status
    while (1) {
        ii = RT2880_MDIO_ACCESS_R;
        //printk("\n RT2880_MDIO_ACCESS_R = 0x%08X",ii);
        if (!(ii & (0x1 << 31))) {
            status = RT2880_MDIO_ACCESS_R;
            *read_data = (unsigned int) (status & 0x0000FFFF);
            return 1;
        } else if ( (jiffies -t_start) > (5 * HZ)) {
            printk("\n MDIO Read operation is ongoing and Time Out!!\n");
            return 0;
        }
    }
}

unsigned int mii_mgr_write(unsigned int phy_addr, unsigned int phy_register, unsigned int write_data)
{
    unsigned int volatile status;
    unsigned int volatile ii, t_start;



    t_start = jiffies;

    // clear previous rw_ok status
    while (1) {

        if (!(RT2880_MDIO_ACCESS_R & (0x1 << 31))) {

            break;
        } else if ( (jiffies - t_start) > (5 * HZ)) {
            printk("\n MDIO Read/Write operation is ongoing !!\n");
            return 0;
        }
    }


    RT2880_MDIO_ACCESS_R = 0;
    ii = 0;
    ii = (phy_addr << 24) | (phy_register << 16) | (1 << 30) | write_data;

    //printk("\n Set Command [0x%08X] to PHY !!\n",ii);
    RT2880_MDIO_ACCESS_R = ii;

    ii |= (1 << 31);

    RT2880_MDIO_ACCESS_R = ii;

    t_start = jiffies;

    // clear previous rw_ok status
    while (1) {
        ii = RT2880_MDIO_ACCESS_R;
        if (!(ii & (0x1 << 31))) {
            return 1;
        } else if ( (jiffies -t_start) > (5 * HZ)) {
            printk("\n MDIO Read operation is ongoing and Time Out!!\n");
            return 0;
        }
    }
}
EXPORT_SYMBOL(mii_mgr_write);
EXPORT_SYMBOL(mii_mgr_read);
