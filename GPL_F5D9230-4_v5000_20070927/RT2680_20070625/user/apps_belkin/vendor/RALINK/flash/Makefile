EXEC = flash
EXEC1		= libflash.so

OBJS = flash.o flash_api.o
OBJS1 	= flash_api.o

CFLAGS 	+= -I$(KERNEL_DIR)/drivers/flash -I./
CFLAGS	+= $(PATHCONF)


#all: $(EXEC) $(EXEC1)
all:

$(EXEC): $(OBJS)
	$(CC) $(EXTRA_CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)
	$(STRIP) --remove-section=.note --remove-section=.comment $@
	
$(EXEC1): $(OBJS1)
	$(LD) -EL -shared -o $@ $^
	$(STRIP) --remove-section=.note --remove-section=.comment $@

romfs:
	cp $(EXEC) $(ROMFSDIR)/bin/
	cp $(EXEC1) $(ROMFSDIR)/lib/

clean:
#	-rm -f $(EXEC) $(EXEC1) *.elf *.gdb *.o

