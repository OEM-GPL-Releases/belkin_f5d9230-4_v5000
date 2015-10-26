VPATH = os/linux:ap:common:sta

###################
#  AP
##################

ifeq ($(CONFIG_RT2860V2_AP),y)
O_TARGET := rt2860v2_ap.o

RT2860_OBJ = md5.o mlme.o rtmp_wep.o action.o my_action.o cmm_data.o rtmp_init.o\
             rtmp_tkip.o cmm_sync.o cmm_sanity.o cmm_info.o cmm_wpa.o \
	     \
         ap.o ap_assoc.o ap_auth.o ap_authrsp.o ap_connect.o ap_mlme.o ap_sanity.o\
	     ap_sync.o ap_wpa.o ap_data.o ap_uapsd.o ap_autoChSel.o ap_mbss.o\
	     \
	     rt_linux.o rt_profile.o rt_main_dev.o ap_ioctl.o rt_2860_rbus.o rt_eeprom.o



ifeq ($(CONFIG_RT2860V2_WSC),y)
RT2860_OBJ += wsc.o wsc_tlv.o sha2.o hmac.o dh_key.o evp_enc.o
endif

ifeq ($(CONFIG_RT2860V2_NINTENDO),y)
RT2860_OBJ += ap_nintendo.o
endif

#ifeq ($(CONFIG_RT2860V2_ATE),y)
RT2860_OBJ += ap_ate.o
#endif

ifeq ($(CONFIG_RT2860V2_WDS),y)
RT2860_OBJ += ap_wds.o
endif

ifeq ($(CONFIG_RT2860V2_APCLI),y)
RT2860_OBJ += ap_apcli.o apcli_assoc.o apcli_auth.o apcli_ctrl.o apcli_mlme.o apcli_sync.o
RT2860_OBJ += cmm_mat.o cmm_mat_iparp.o cmm_mat_pppoe.o
endif

endif


###################
#  CFLAGS
##################
EXTRA_CFLAGS = -Iinclude -DAGGREGATION_SUPPORT -DPIGGYBACK_SUPPORT -DWMM_SUPPORT  -DLINUX \
	       -Wall -Wstrict-prototypes -Wno-trigraphs

ifeq ($(CONFIG_RT2860V2_AP),y)
EXTRA_CFLAGS += -DCONFIG_AP_SUPPORT  -DUAPSD_AP_SUPPORT -DDBG 

ifeq ($(CONFIG_RT2860V2_NINTENDO),y)
EXTRA_CFLAGS += -DNINTENDO_AP
endif

ifeq ($(CONFIG_RT2860V2_WSC),y)
EXTRA_CFLAGS += -DWSC_AP_SUPPORT
endif

ifeq ($(CONFIG_RT2860V2_LLTD),y)
EXTRA_CFLAGS += -DLLTD_SUPPORT
endif

ifeq ($(CONFIG_RT2860V2_TEST),y)
EXTRA_CFLAGS += -DWIFI_TEST
endif

ifeq ($(CONFIG_RT2860V2_ATE),y)
EXTRA_CFLAGS += -DRALINK_ATE
EXTRA_CFLAGS += -DGEMTEK_ATE
EXTRA_CFLAGS += -DRALINK_2880_ATE
endif

ifeq ($(CONFIG_RT2860V2_WDS),y)
EXTRA_CFLAGS += -DWDS_SUPPORT
endif

ifeq ($(CONFIG_RT2860V2_APCLI),y)
EXTRA_CFLAGS += -DAPCLI_SUPPORT
EXTRA_CFLAGS += -DMAT_SUPPORT
endif


ifeq ($(CONFIG_RT2880_BRIDGING_ONLY),y)
EXTRA_CFLAGS   += -DCONFIG_RT2880_BRIDGING_ONLY
endif

endif

obj-y := $(RT2860_OBJ) 
obj-m := $(O_TARGET)

include $(TOPDIR)/Rules.make
