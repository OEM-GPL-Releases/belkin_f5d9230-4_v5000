#
# the original path of firmware image, will be used when building new image with header
#ORI_IMGDIR 							:= $(shell (cd ../../ && pwd -P))/image
#FW_FILE 									:= linux.sqsh


#
# HOSTCC will be used by conf and applications which under tools folder
export HOSTCC 						:= gcc
export HOSTCXX						:= g++

#
# SYS_ENDIAM will be used by
#		1. igmp
#		2. build root file system by using mksquashfs tool
#		3. fw-tools/mkimage
export SYS_ENDIAN 				:= LITTLE_ENDIAN

#
# SRCBASE will be refered by 
#		1. rc
#		2. nvram
export SRCBASE						:= $(shell (cd .. && pwd -P))

#
# USERDIR
export USERDIR 						:= $(shell (cd . && pwd -P))

#
# ROMFSDIR : target directory
#		1. busybox
#		2. all application
#		3. uClibc
export ROMFSDIR 					:= $(USERDIR)/romfs

#
# IMAGEDIR : firmware image directory
export IMAGEDIR 					:= $(USERDIR)/image

#
#	KERNEL_DIR : linux kernel source directory, some applicatoin will refer to the kernel defined header file
# 	1. iptables
#		2. netconf
#		3. iproute2
#		4. vconfig
#		5. uClibc
export KERNEL_DIR 				:= $(SRCBASE)/linux-2.4.x

#
#	VENDOR_DIR : All vendor-related program will be put under this folder
export VENDOR_DIR					:= $(USERDIR)/apps/vendor/$(PROJECT)

#
# lib : library
export LIBDIR							:= $(USERDIR)/lib/Ralink/RT2880/uClibc-0.9.28

#
# SQSHTOOL : squash-tools directory
export SQSHTOOL 					:= $(USERDIR)/tools/rootfs-tools/squashfs-tools-3.0

#
# UBOOTTOOL : uboot-tools directory
export UBOOTTOOL 					:= $(USERDIR)/tools/uboot-tools/ralink_mkimage

#
#	FWTOOL	: fw-tools directory
export FWTOOL							:= $(USERDIR)/tools/fw-tools/fw_mkimage

#
#	HEADERTOOL	: header-tools directory
export HEADERTOOL					:= $(USERDIR)/tools/header-tools/header_mkimage


export PATHUSER 					:= -I. -I$(USERDIR)/include
export PATHCONF						:= -I$(USERDIR)/conf/$(VENDOR)_$(MODEL)
export PATHSSL 						:= -I$(USERDIR)/apps/openssl-0.9.8a/include

export PATHNVRAM 					:= -I$(USERDIR)/apps/vendor/RALINK/nvram/include
export PATHFACTORY 				:= -I$(USERDIR)/apps/vendor/RALINK/nvram_factory/include
export PATHSTORAGE 				:= -I$(USERDIR)/apps/libstorage
export PATHUTILITY				:= -I$(USERDIR)/apps/libutility

export LIBNVRAM 					:= -L$(USERDIR)/apps/vendor/RALINK/nvram/nvram -lnvram
export LIBFACTORY 				:= -L$(USERDIR)/apps/vendor/RALINK/nvram_factory/bin -lfactory
export LIBSTORAGE 				:= -L$(USERDIR)/apps/libstorage -lstorage
export LIBUTILILTY				:= -L$(USERDIR)/apps/libutility -lutility


#
#
export PATHFLASH					:= -I$(VENDOR_DIR)/flash
export LIBFLASH						:= -L$(VENDOR_DIR)/flash -lflash


#
# Binutil defination
CROSS_COMPILE							:= mipsel-linux-uclibc-
CC												:= $(CROSS_COMPILE)gcc
CXX												:= $(CROSS_COMPILE)g++
AS												:= $(CROSS_COMPILE)as
LD												:= $(CROSS_COMPILE)ld
AR												:= $(CROSS_COMPILE)ar
NM												:= $(CROSS_COMPILE)nm
STRIP											:= $(CROSS_COMPILE)strip
RANLIB										:= $(CROSS_COMPILE)ranlib
OBJDUMP										:= $(CROSS_COMPILE)objdump
OBJCOPY										:= $(CROSS_COMPILE)objcopy


# Please refer to Chip Vender original design to find out how to build the kernel image
# image file name
IMAGE_KERNEL_PRIMITIVE		:= vmlinux
IMAGE_KERNEL_STRIPPED			:= $(IMAGE_KERNEL_PRIMITIVE).bin
IMAGE_KERNEL_COMPRESSED		:= $(IMAGE_KERNEL_STRIPPED).gz
IMAGE_KERNEL_UBOOT				:= uImage
IMAGE_ROOT								:= root.sqsh
IMAGE_FIRMWARE						:= firmware.bin


# Please refer to Chip Vender original design to find out how to build the kernel image
image_kernel:
	$(MAKE) -C $(UBOOTTOOL) all
	$(CROSS_COMPILE)objcopy -O binary -R .note -R .comment -S $(KERNEL_DIR)/$(IMAGE_KERNEL_PRIMITIVE)  $(IMAGEDIR)/$(IMAGE_KERNEL_STRIPPED)
	cd $(IMAGEDIR) ; rm -f $(IMAGE_KERNEL_COMPRESSED); gzip -9 $(IMAGE_KERNEL_STRIPPED)
	cd $(IMAGEDIR) ; $(UBOOTTOOL)/mkimage -A mips -O linux -T kernel -C gzip -a 8a000000 -e $(shell readelf -h $(KERNEL_DIR)/vmlinux | grep "Entry" | awk '{print $$4}') -n "Linux Kernel Image"  -d $(IMAGE_KERNEL_COMPRESSED) $(IMAGE_KERNEL_UBOOT)
