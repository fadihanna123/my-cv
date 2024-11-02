build: 
	yarn build
	@echo "Build complete"

deploy:
	yarn build
	yarn deploy

run:
	yarn dev
