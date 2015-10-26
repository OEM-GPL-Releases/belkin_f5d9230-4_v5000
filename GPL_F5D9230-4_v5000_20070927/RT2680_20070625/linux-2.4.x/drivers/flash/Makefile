#
# Makefile for flash devices that really don't fit anywhere else.
#
# Note! Dependencies are done automagically by 'make dep', which also
# removes any old dependencies. DON'T put your own dependencies here
# unless it's something special (ie not a .c file).
#
# Note 2! The CFLAGS definitions are now inherited from the
# parent makes..
#
O_TARGET := flash.o 
obj-y   := flash_main.o flash_ioctl.o mii_mgr_main.o
obj-m   := $(O_TARGET)

export-objs := flash_main.o mii_mgr_main.o

include $(TOPDIR)/Rules.make
