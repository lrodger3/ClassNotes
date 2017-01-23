# Front-End Routing


## WARMUP

Create a basic homepage (`index.html`) for a coffeeshop that has a `greeting` which is defined in an angular controller (`main.js`)


> Front end routing is the ability to simulate different pages in a single-page-application (SPA).  We're making changes to a page __without__ refreshing.

Angular comes with a basic routing service called `ngRoute`

Another popular for Angular is called `ui.router` (3rd party)

## What is Routing?

A Route, is just the path you take to get somewhere

`/main.js` => Grab the file thats in `/public/main.js`
`/about`   => Give the user the `about` page
`/users`   => Talk to the DB and give us a list of users


In Angular, _front end routes_ are used solely for changing views (similar to the `/about` route above).  On the server, we could do whatever we wanted with different routes

Routes are often denoted by a URL change.  In Angular, we will be changing the URL, but in a way that the browser will not refresh the page.

Angular routes are prefixed with a `#`




