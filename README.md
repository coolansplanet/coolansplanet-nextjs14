# Coolans Planet Frontend App (Next.js)

This is the frontend of https://coolansplanet.com, made with [Next.js](https://nextjs.org/) version 12. In development mode, the backend data is taken from the live website itself, so it's not necessary to download the admin app to start playing around.

## Basic Scripts:

- Running the dev server: `yarn dev` or `npm run dev`

- Testing the app: `yarn test` or `npm run test`

- Starting the app: `yarn start` or `npm run start`

- Building the app: `yarn build` or `npm run build`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Folders:

- `./assets`: static assets goes here.
- `./components`: contains all components (and their styles) with the exception of pages.
- `./config`: all static values (string, numbers, etc) are in this folder.
- `./helpers`: includes all functions used in more than one place (also the so called _React Hooks_).
- `./app`: contains pages components + api folder.
- `./app/api`: contains the API, which in this case is the interface with the server.
- `./public`: statically rendered files goes here.
- `./styles`: contains global variables for scss.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

---

## Sonarqube:

### How to run the Sonarqube server:

1. Make sure you have Docker installed and running.

2. Run the sonar docker containers with `docker compose up -d`

3. Open [http://localhost:9000](http://localhost:9000) with your browser

If it's the first time you run the Sonarqube server, the username and password to login will be `admin` (for both of them). Once you've logged in, please make sure you change the password into a more secure one!

Once the Sonarqube server is running, you can scan this repository code with it:

- To run sonarLint: `yarn sonarLint`

- To run sonar-scanner: `yarn sonar`
