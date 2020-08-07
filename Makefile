build:
	docker build --compress --force-rm --rm --tag webapp .

run:
	docker run -d -t -i -p 3000:3000 -e PORT=3000 -e NODE_ENV=development --name webapp webapp

stop:
	docker stop webapp

rm:
	docker rm webapp

rmi:
	docker rmi webapp

# run with docker-compose
run-dc:
	docker-compose up -d --build

stop-dc:
	docker-compose down