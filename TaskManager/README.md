## Task Management
Building a fullstack application using sveltekit, flowbite and directus.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0.0 or higher)
- **MySQL** (version 8.0.0 or higher)
- **Git**
- **Directus** (version 9.x)

## Getting Started

# Creating a svelte project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```
# Integrating flowbite ,tailwind css to svetle app

```bash
npx svelte-add@latest tailwindcss
npm install
npm i flowbite flowbite-svelte tailwind-merge @popperjs/core
```
from this repository copy  tailwind.config.js configuration file 

#  Integrating directus SDK
```bash
 npm install @directus/sdk```
To handle jwt tokens install jsonwebtoken
```bash
npm install jsonwebtoken```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
## Directus configuration

# Installing  directus
``` bash
npm install -g directus
```
During installation user will be prompted to provide database details (MySQL) such as root user name and password . 

# To start directus 
``` bash
npx directus start
```

after completing installation you will be provided with "Admin" user to login to directus.
Addtionally for this project ,
1. I created 'task' Collection with  following fields:
 
 title:string*,description:textarea*,status:dropdown(new,inprogress,blocked,completed)*,due_date:date*
 
2. I created 'taskmanagment_customer' role which has app access and 'read','write','update' and 'delete' permission for loged user on 'task collection'.

Every time new user registers to TaskManagment app ,admin has to verify the user and assign the role as "taskmanagment_customer" if not registered user will not be able to login.

Note :
1. All the configuration for directus is present in '.env' file(check the repository )
2. Directus should be up and runing in order to taskmanagment app to work.
