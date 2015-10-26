deps_config := \
	util-linux/Config.in \
	sysklogd/Config.in \
	shell/Config.in \
	procps/Config.in \
	networking/udhcp/Config.in \
	networking/Config.in \
	modutils/Config.in \
	miscutils/Config.in \
	loginutils/Config.in \
	init/Config.in \
	findutils/Config.in \
	editors/Config.in \
	debianutils/Config.in \
	console-tools/Config.in \
	coreutils/Config.in \
	archival/Config.in \
	/home/kyo/GPL/GPL_BELKIN_F5D9230-4_v5000/RT2680_20070625/user/apps_belkin/busybox/sysdeps/linux/Config.in

.config include/config.h: $(deps_config)

$(deps_config):
