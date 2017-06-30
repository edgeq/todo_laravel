# Node Express Handlebars

**Have fun with this assignment - we have crafted it specially for full time - Use this to integrate your knowledge from the past few weeks, and make an awesome portfolio piece. Use you passion to share your mad skillz!**

### Overview

During this assignment you will create a full stack web application using MySQL, Node, Express, and Handlebars. Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

This assignment is extremely open-ended but must meet the following criteria.
* Must include a MySQL Database.
* Must use CSV Files to populate your database.
* Your database must use _at least_ one JOIN.
* Must utilize **GET** and **POST** requests to query AND add data.
* Must use all methods for manipulating persistent storage (**CRUD**)
* Must use Handlebars for server-side rendering
* Must use Express for HTML and API routing (Remember that you can utilize `express.static()` middleware to serve static assets like css, images, client-side JavaScript files) 
* Must use best practices for front end HTML and CSS design.
* Must be deployed to Heroku.
* Must include a `package.json` file to manage project dependencies.
* Must include a `.gitignore` file to ignore directories that shouldn't be tracked by Git. (Examples to ignore: `node_modules/`, `idea/`, `.DS_Store`, and any other files/directories that should not be pushed to your repo.)

This assignment is a teaser for your final project, so make sure to make it count. This is a huge assignment that could used as an amazing portfolio piece in the future!

### Important

While using Heroku, you may be required to supply a Credit Card, be prepared for this. They do not bill your card unless you have a ton of traffic (which is a great problem to have, and you can add-on Google AdSense to make money).

### Before You Begin

* Research your datasets. You will need to download a dataset from [kaggle.com](kaggle.com) for this assignment. You'll want to find a dataset that comprises at least 3 .CSV files (with **foreign keys** i.e. `user_id == users.id`) to populate your tables. This is will give you many different combinations that could satisfy your JOIN requirement.

* Example data sets [FIFA Player Data](https://www.kaggle.com/artimous/complete-fifa-2017-player-dataset-global), [Simpsons](https://www.kaggle.com/wcukierski/the-simpsons-by-the-data), [Game of Thrones](https://www.kaggle.com/mylesoneill/game-of-thrones), or many other in the [Most Popular](https://www.kaggle.com/datasets)

* You will need to Create, Read, Update, and Delete data from your database and display each of those action (in some way) in your application so make sure that your theme will work around that.

* Don't forget about that JOIN requirement as well... hint hint ;-)

## Instructions

#### App Setup

1. Create a GitHub repo and clone it to your computer.

2. Generate a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express --save`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars --save`.

6. Install the body-parser npm package: `npm install body-parser --save`.

7. Install MySQL npm package: `npm install mysql --save`.

8. Require the following npm packages inside of the server.js file:
   * express
   * method-override
   * body-parser

#### DB Setup

1. Inside your repo's directory, create a folder named `db`.

2. In the `db` folder, create a folder named `schema.sql`. Write SQL queries this file that do the following:

   * Create the database
   * Switch to or use the database.
   * Create a table with values from your CSV files, don't forget an id!
     * **id**: an auto incrementing int that serves as the primary key.

3. Still in the `db` folder, create a `seeds` folder. In this folder, please place the .zip file containing your datasets downloaded from kaggle.com. Don't forget to give credit in your Github READ.me

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   * unzip those files, and import the datasets into your database using Workbench or Sequel Pro.

#### Model setup

* Inside your repo's directory, create a folder named `models`.

  * In `models`, make a `model.js` file.

    * Export at the end of the `model.js` file.

#### Controller setup

1. Inside your repo's directory, create a folder named `controllers`.

2. In `controllers`, create the `controller.js` file.

3. Inside the `controller.js` file, import the following:

   * Express
   * `model.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your repo's directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```

├── controllers
│   └── controller.js
│
├── db
│   ├── schema.sql
│   └── seeds
|        ├── dataset.zip
│
├── models
│   └── model.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   └── img
│   │       └── repo.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

- - -

### One More Thing

This is a really tough homework assignment, but we want you to put in your best effort to finish it.

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

## Copyright

Coding Boot Camp (C) 2017. All Rights Reserved.
