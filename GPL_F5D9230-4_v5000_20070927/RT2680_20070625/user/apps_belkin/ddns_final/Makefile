# Philipp Benner		#
# http://philippb.tk		#

BIN = updatedd
IDIR = $(INSTALLDIR)/sbin
LDIR = $(INSTALLDIR)/lib
XDIR = /lib
MARCH = `uname -m`

#CC = gcc
LD = $(CC)
#FLAGS = -Wall -pipe -march=${MARCH} -O3
#GFLAGS = -Wall -g -ggdb -pipe
CF = -I. -I$(ROOTDIR)/user/apps/shared -I$(KERNELDIR)/include -Wall -pipe
#CF += -L$(TOP)/nvram 
CF += -L../nvram/bin -lnvram 
#FLAGS += -s -03  
CL = -L$(LIBDIR) -ldl

all:
	${LD} ${CF} -c src/updatedd.c src/modules/base64encode.c src/modules/get_connection.c src/modules/error.c src/modules/get_ifaddr.c src/modules/GetHostByName.c src/libs/dyndns.c src/libs/tzo.c
#	${LD} ${CF} -c src/updatedd.c src/modules/base64encode.c src/modules/get_connection.c src/modules/error.c src/modules/get_ifaddr.c src/modules/GetHostByName.c src/libs/dyndns.c src/libs/ovh.c src/libs/ods.c src/libs/hn.c src/libs/noip.c src/libs/tzo.c src/libs/changeip.c
#	${LD} -shared -WL,-soname,dyndns.so -o dyndns.so dyndns.o get_connection.o error.o base64encode.o  
#	${LD} -shared -WL,-soname,ovh.so -o ovh.so ovh.o get_connection.o error.o base64encode.o get_ifaddr.o  
#	${LD} -shared -WL,-soname,ods.so -o ods.so ods.o get_connection.o error.o get_ifaddr.o 
#	${LD} -shared -WL,-soname,hn.so -o hn.so hn.o get_connection.o error.o base64encode.o get_ifaddr.o 
#	${LD} -shared -WL,-soname,noip.so -o noip.so noip.o get_connection.o get_ifaddr.o error.o
#	${LD} ${CF} -lnvram -o ${BIN} updatedd.o error.o base64encode.o get_connection.o get_ifaddr.o GetHostByName.o dyndns.o ovh.o ods.o hn.o noip.o tzo.o changeip.o
	${LD} ${CF} -lnvram -o ${BIN} updatedd.o error.o base64encode.o get_connection.o get_ifaddr.o GetHostByName.o dyndns.o tzo.o


	rm -f *.o

debug:
	${LD} ${GFLAGS} -fPIC -c src/modules/base64encode.c src/modules/get_connection.c src/modules/error.c src/modules/get_ifaddr.c src/modules/GetHostByName.c src/libs/dyndns.c src/libs/ovh.c src/libs/ods.c src/libs/hn.c src/libs/noip.c src/libs/tzo.c src/libs/changeip.c
#	${LD} -shared -WL,-soname,dyndns.so -o dyndns.so dyndns.o get_connection.o error.o base64encode.o -lc
#	${LD} -shared -WL,-soname,ovh.so -o ovh.so ovh.o get_connection.o error.o base64encode.o get_ifaddr.o -lc
#	${LD} -shared -WL,-soname,ods.so -o ods.so ods.o get_connection.o error.o get_ifaddr.o -lc
#	${LD} -shared -WL,-soname,hn.so -o hn.so hn.o get_connection.o error.o base64encode.o get_ifaddr.o -lc
#	${LD} -shared -WL,-soname,noip.so -o noip.so noip.o get_connection.o get_ifaddr.o error.o
#	${LD} ${GFLAGS} -o ${BIN} src/modules/error.c src/updatedd.c -ldl
	rm -f *.o



clean:
#	rm -f *.so
	rm -f *.o
	rm -f ${BIN}

romfs:
	cp ${BIN} $(ROMFSDIR)/bin/${BIN}
	$(STRIP) $(ROMFSDIR)/bin/${BIN}

uninstall:
	rm -f ${IDIR}/${BIN}
