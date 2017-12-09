SRC_ICON = looker_bubbles.png
CSON_FILES = $(wildcard *.cson)
COFFEE_FILES = $(wildcard *.coffee)
ICONS=
ZIP_EXCLUDE= $(CSON_FILES) $(COFFEE_FILES) .git* $(SRC_ICON) screenshot*.png Makefile README.md \
	node_modules/* package.json dist/* .DS_Store *.xcf coffeelint.json

JSON_FILES = $(CSON_FILES:.cson=.json)
JS_FILES = $(COFFEE_FILES:.coffee=.js) background.js content.js

space :=
space +=
ZIP_EXCLUDE_FLAGS = --exclude=$(subst $(space),$(space)--exclude=,$(ZIP_EXCLUDE))

build: setup $(wildcard **/*) $(ICONS) $(JSON_FILES) $(JS_FILES)
	dirname=$(shell basename $(PWD)); zip -r $(ZIP_EXCLUDE_FLAGS) dist/$$dirname.zip . $(ZIP_INCLUDES)

clean:
	rm -fv $(JSON_FILES) $(JS_FILES) $(ICONS)
	rm -rf node_modules/ vendor/ dist/
	rm -fv icon[1-9][0-9]*.png
	dirname=$(shell basename $(PWD)); rm -fv dist/$$dirname.zip

%.json : %.cson
	./node_modules/.bin/cson2json $< > $@

%.js : %.coffee
	./node_modules/.bin/coffee -p $< > $@

icon%.png: $(SRC_ICON)
	convert $(SRC_ICON) -resize $* $@


dist:
	mkdir -v dist

setup: dist
