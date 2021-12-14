dev:
	docker-compose -f docker-compose.dev.yml up --build
prod:
	docker-compose -f docker-compose.prod.yml up --build

down-dev:
	docker-compose -f docker-compose.dev.yml down
down-dev-volume:
	docker-compose -f docker-compose.dev.yml down -v

down-prod:
	docker-compose -f docker-compose.prod.yml down
down-prod-volume:
	docker-compose -f docker-compose.prod.yml down -v
	
tests:
	yarn run test
	