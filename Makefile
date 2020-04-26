run:
	npm run babel-node -- 'gendiff.js'

publish:
	npm publish --dry-run

lint:
	npm run eslint .

test:
	npm test