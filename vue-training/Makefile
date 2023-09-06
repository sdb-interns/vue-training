init:
	@make build
	@make up
	@make npm-install
	@make npm-dev
build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d
down:
	docker-compose down --remove-orphans
stop:
	docker-compose stop
app:
	docker-compose exec node sh
npm-install:
	docker-compose exec node npm install
npm-dev:
	docker-compose exec node npm run dev
npm-build:
	docker-compose exec node npm run build