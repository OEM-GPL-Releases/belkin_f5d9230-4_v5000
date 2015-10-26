#ifndef _NVRAM_H
#define _NVRAM_H 	1

extern char *nvram_get(char *name);
extern void nvram_init(void);
extern void nvram_close(void);
extern int nvram_set(char *name,char *value);
extern int nvram_match(char *name,char *value);
extern int nvram_bufset(char *name,char *value);
extern int nvram_commit();
#endif
