install: install-deps install-flow-typed

run:
	npm start

install-deps:
	yarn

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

test:
	yarn test

check-types:
	npm run flow

lint:
	npm run eslint .

publish:
	npm publish

.PHONY: test
