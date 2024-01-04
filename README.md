
# Fabio Vaz Portfólio



## [Strapi](https://strapi.io/)
Strapi Community Edition is a free and open-source headless CMS enabling you to manage any content, anywhere.
Hosted @ https://railway.app/

## [PostgreSQL](https://www.postgresql.org/)
PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.
Hosted: https://railway.app/

## [Nuxt](https://github.com/nuxt/nuxt)
Nuxt is an open source framework that makes web development intuitive and powerful.
Hosted: https://vercel.app/


## Getting Started

1. Clone the repository locally:

```bash
  git clone https://github.com/fabiovaz/portfolio
    or
  gh repo clone fabiovaz/portfolio
```

2. Run `setup` command to setup frontend and backend dependencies:

```bash
  yarn setup
```

3. Next, navigate to your `/backend` directory and set up your `.env` file. You can use the `.env.example` file as reference:

```bash
HOST=localhost
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

4. Start your project by running the following command:

```bash
  yarn build
  yarn develop
```

You will be prompted to create your first admin user.

Great. You now have your project running.

## Setting Up The Frontend

Next we need to switch to our `/frontend` directory and create our `.env` file and paste in the following. 

```bash
VITE_API_URL=http://localhost:1337
```
Once your environment variables are set you can start your frontend application by running `yarn dev`.

## Start Both Projects Concurrently

We can also start both projects with one command using the `concurrently` package.

You can find the setting inside the `package.json` file inside the root folder.

```json
{
  "scripts": {
    "frontend": "yarn dev --prefix ../frontend/",
    "backend": "yarn dev --prefix ../backend/",
    "setup:frontend": "cd frontend && yarn",
    "setup:backend": "cd backend && yarn",
    "setup": "yarn install && yarn setup:frontend && yarn setup:backend",
    "dev": "yarn concurrently -n front,back \"cd frontend && yarn dev\" \"cd backend && yarn develop\"",
    "repo:upstream": "git fetch upstream && git merge upstream/main"
  },
  "dependencies": {
    "concurrently": "^8.2.2"
  }
}
```
Go to the root folder and install the package, `yarn`
You can start both apps by running `yarn dev`.

## Conclusion

Thank you and stay awesome.
