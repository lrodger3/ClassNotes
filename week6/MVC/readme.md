# Express MVC

## Warmup

- Create a basic express app
  - package.json
  
  - server file (with boilerplate code)
    - Bonus : include and mount both `body-parser` and `morgan`
    
  - public folder
    - html / js folder inside of `public`
      - index.html inside of `html` (basic boilerplate)

- Run it!  Make sure your server starts up


## MVC

### M(odel)
  - Describes the structure and storage of data
  - often described by `SCHEMA`
  - Typically involves some data validation / formatting
  
### V(iew)
  - The presentation of your model (what the end user sees)
  - for single page apps (SPAs), this is handled by Angular and HTML (`client-side` templating)
  - can also be implemented with `server-side` templating

### C(ontroller)
  - Glue between the model and the view
  - most of the interesting things that happen
  - responsible for the logic that pulls data from the model & passes it to the view
  - also used to transform what our __IS__ into what our users will __SEE__
  - responsible for updating our model
  
  
## Fat Client vs Thin Client

- Handling controller logic in the `client` => `Fat Client`
  - Angular creates `Fat Client` apps

- Handling controller logic in the `server` => `Thin Client`
  - Express dominates your controller logic
  
- Devices can be a big consideration for the kind of app to build
  - small, crappy devices do better with a `Thin Client`


## Trace the require/exports!

Model => Controller => Routes => Server.js




  
