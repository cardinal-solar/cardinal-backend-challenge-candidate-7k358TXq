NodeJS, Postgres is required to run the app.
Setup DB and change the .env file according to your local machine.

NestJS typically runs on newer node versions, so it's better to at least use version 18.

---- npm install

After setting up the DB and its credentials in .env file, please run the migration by
---- npm run typeorm:migrate

It's a code first approach, if the migration is unsuccessful, then please run
---- npm run start
and then again
---- npm run typeorm:migrate


to start the Nest application,
---- npm run start

visit localhost:3000/graphql to see all the docs and playground.


To do it with docker, install "docker" & "docker-compose" on local machine.

run "docker-compose up" in the root of the project. It will automatically start working on the assigned ports in compose file. If ports are not available in local environment. Please change the ports.

HAPPY TESTING.