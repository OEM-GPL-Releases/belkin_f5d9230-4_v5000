EXEC = ate
SRCS = ate.c

#EXTRA_CFLAGS += -DDBG
#OsborneModify Start on June 7, 2007.
EXTRA_CFLAGS += -I$(KERNEL_DIR)/include
#OsborneModify End.

#all: $(EXEC)
all:

$(EXEC): $(SRCS) $(ROOTDIR)/$(LINUXDIR)/include/linux/autoconf.h
	$(CC) $(CFLAGS) $(EXTRA_CFLAGS) $(LDFLAGS) -o $@ $@.c $(LDLIBS)

romfs:
	$(ROMFSINST) /bin/$(EXEC)

clean:
#	-rm -f $(EXEC) *.o

