EXEC1 = bpalogin
OBJS1 = bpalogin.o protocol.o transaction.o gen_md5.o unixmain.o
#CFLAGS	+= -DGEMTEK -DBELKIN
FLTFLAGS += -s 16384
all: $(EXEC1)

$(EXEC1): $(OBJS1)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS1) $(LIBCRYPT) $(LDLIBS$(LDLIBS-$(@)))

romfs: all
	cp  $(EXEC1) $(ROMFSDIR)/bin/$(EXEC1)
	cp  bpalogin.conf $(ROMFSDIR)/bin/bpalogin.conf	
#	$(ROMFSINST)  $(EXEC1) /bin/$(EXEC1)
##	$(ROMFSINST)  bpalogin.init /bin/bpalogin.init
##	$(ROMFSINST)  bpalogin.bsd /bin/bpalogin.bsd
#	$(ROMFSINST)  bpalogin.conf /bin/bpalogin.conf	
	
clean:
	rm -f $(EXEC1) *.elf *.gdb *.o

