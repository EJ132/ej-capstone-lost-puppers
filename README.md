Lost Puppers

https://lostpuppers.netlify.com/

API Documentation: 

POST Features:
    - '/auth/login' is made for users to login
    - '/pups' is made for users to post a new pup
    - '/users' allows user registration
    - '/comments' is the endpoint where comments are sent

GET Features:
    - '/profile/:user_name' accesses the specific logged in users profile
    - '/pups' displays all the lost puppers
    - '/pups/:id' shows a personal page of the specific pup
    - '/pups/:id/comments' shows the comments that go with the pup page ^^^

DELETE Feauture: 
    - '/pups/:id' deletes a certain pup listing

PATCH Feature:
    - '/pups/:id' allows updates to the pup name and description

![Lost puppers home page](/src/Images/homepageSS.png)

This application is made for users who have lost their pups/pets and want to make a listing for the
community to keep an eye out. Users are able to create and login into their personal accounts. They can
view other listings and leave comments for others to see where the dog was last seen or any other 
information. Once a pup is created, the owner is still able edit descriptions and name of their dogs
just incase. They're private and public routes in the application that only allows signed up users to
see certain information that the public cannot view.

How to get started?

Simple! You start by clicking on the "Get Started" button and sign up! It's not complicated at all.
You can then go to the find page and find dogs or make your own listing. This site was made for all people
of all ages.

For Developers or Any Users:

Test Accounts:

User_Name: TestUser

Password: Testuser123

Technologies used?

Front-End: 
    - Javascript
    - React
        - React-Router-Dom
        - History
        - Context 
    - CSS
    - Testing with:
        - Enzyme && Adapter && toJson
        - Shallow

Back-End:
    - Express
    - Morgan
    - Cors
    - Helmet
    - bcryptjs
    - jsonwebtoken
    - Nodemon
    - Knex
    - dotenv
    - Testing with:
        - Chai
        - Mocha
        - Supertest
        - pg
        - Treeize
        - Xss