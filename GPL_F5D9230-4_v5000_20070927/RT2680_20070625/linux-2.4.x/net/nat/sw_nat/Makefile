O_TARGET := sw_nat.o

ifeq ($(CONFIG_RA_SW_NAT),y)
NAT_OBJ = sw_nat_k.obj
endif

ifeq ($(CONFIG_RA_SW_NAT),m)
NAT_OBJ = sw_nat_m.obj
endif

obj-y := $(NAT_OBJ)
obj-m := $(O_TARGET)
include $(TOPDIR)/Rules.make
