/*
 * define path names
 *
 * $Id: pathnames.h,v 1.15 2002/11/02 19:48:13 carlsonj Exp $
 */

#ifdef HAVE_PATHS_H
#include <paths.h>

#else /* HAVE_PATHS_H */
#ifndef _PATH_VARRUN
// +++ Gamble, Gemtek
#define _PATH_VARRUN 	"/var/ppp/"
// --- Gamble, Gemtek
#endif
#define _PATH_DEVNULL	"/dev/null"
#endif /* HAVE_PATHS_H */

#ifndef _ROOT_PATH
#define _ROOT_PATH
#endif

// +++ Gamble, Gemtek
#define _PATH_UPAPFILE 	 _ROOT_PATH 	"/var/ppp/pap-secrets"
#define _PATH_CHAPFILE 	 _ROOT_PATH 	"/var/ppp/chap-secrets"
#define _PATH_SRPFILE 	 _ROOT_PATH 	"/var/ppp/srp-secrets"
#define _PATH_SYSOPTIONS _ROOT_PATH 	"/var/ppp/options"
#define _PATH_IPUP	 _ROOT_PATH 		"/var/ppp/ip-up"
#define _PATH_IPDOWN	 _ROOT_PATH 		"/var/ppp/ip-down"
#define _PATH_AUTHUP	 _ROOT_PATH 		"/var/ppp/auth-up"
#define _PATH_AUTHDOWN	 _ROOT_PATH 	"/var/ppp/auth-down"
#define _PATH_TTYOPT	 _ROOT_PATH 		"/var/ppp/options."
#define _PATH_CONNERRS	 _ROOT_PATH 	"/var/ppp/connect-errors"
#define _PATH_PEERFILES	 _ROOT_PATH 	"/var/ppp/peers/"
#define _PATH_RESOLV	 _ROOT_PATH 		"/var/ppp/resolv.conf"
// --- Gamble, Gemtek

#define _PATH_USEROPT	 					".ppprc"
#define	_PATH_PSEUDONYM	 				".ppp_pseudonym"

#ifdef INET6
// +++ Gamble, Gemtek
#define _PATH_IPV6UP     _ROOT_PATH 	"/var/ppp/ipv6-up"
#define _PATH_IPV6DOWN   _ROOT_PATH 	"/var/ppp/ipv6-down"
// --- Gamble, Gemtek
#endif

#ifdef IPX_CHANGE
// +++ Gamble, Gemtek
#define _PATH_IPXUP	 _ROOT_PATH 		"/var/ppp/ipx-up"
#define _PATH_IPXDOWN	 _ROOT_PATH 	"/var/ppp/ipx-down"
// --- Gamble, Gemtek
#endif /* IPX_CHANGE */

#ifdef __STDC__
#define _PATH_PPPDB	_ROOT_PATH _PATH_VARRUN "pppd.tdb"
#else /* __STDC__ */
#ifdef HAVE_PATHS_H
# +++ Gamble, Gemtek
#define _PATH_PPPDB	"/var/ppp/pppd.tdb"
#else
#define _PATH_PPPDB	"/var/ppp/pppd.tdb"
# --- Gamble, Gemtek
#endif
#endif /* __STDC__ */

#ifdef PLUGIN
//	+++ Gamble, GTK_PPPoE
//#define _PATH_PLUGIN	"/usr/lib/pppd/" VERSION
#define _PATH_PLUGIN	"/bin/"
//      --- Gamble, GTK_PPPoE
#endif /* PLUGIN */
