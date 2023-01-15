################################################################################
# Makefile para proyecto: Infinite-playlist
#
# Hecho por Carlos Salas
################################################################################

# Directorio con los archivos fuente.
DIR:=./lib/
files=$(wildcard $(DIR)/*.js)


all : header check


header :
	@echo Running Infinite-playlist makefile.


check:
	@echo Ejecutando la verificación de los archivos.
	@echo
	$(foreach file, $(files), node --check $(file);)

test:
	@yarn test