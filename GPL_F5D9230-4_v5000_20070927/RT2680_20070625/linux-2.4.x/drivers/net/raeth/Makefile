O_TARGET := raeth.o

obj-y    := ra_netlink.o ra_mac.o raether.o
obj-m    := $(O_TARGET)

EXTRA_CFLAGS   += -DWIRELESS_THROUGHPUT_TEST=1

ifeq ($(CONFIG_RAETH_NAPI),y)
EXTRA_CFLAGS   += -DCONFIG_RAETH_NAPI 
endif

ifeq ($(CONFIG_RT2880_BRIDGING_ONLY),y)
EXTRA_CFLAGS   += -DCONFIG_RT2880_BRIDGING_ONLY
endif

ifeq ($(CONFIG_RT2880_ENHANCE),y)
EXTRA_CFLAGS += -DCONFIG_RT2880_ENHANCE
endif

export-objs := raether.o

include $(TOPDIR)/Rules.make 
