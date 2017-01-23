# Middleware

> Generally Middleware is software that bridges the gaps between multiple other pieces of software

> In the context of web servers, Middleware is the chain of functions that are run when the server receives a request all the way to when it sends a response

Essentially a series of functions that are called to do work and eventually send a response down

An express app is basically just a series of middleware calls

## Structure

All middleware functions in Express get access to the following values (as parameters)
1. `req`  => request object
2. `res`  => response object
3. `next` => says this function is done, move on.  Go to the NEXT piece of middleware

```javascript
(req, res, next) => {}
```

Middleware MUST do one of the following things : 
1. Send a response back to the client, ending the Req/Res cycle
2. Call `next()` to move on to the next middleware function

> IF YOU DO NOT SEND A RESPONSE OR CALL NEXT, YOUR SERVER WILL HANG UNTIL THE END OF TIME

nutshell : call `next` until you send a response

## Examples
- Authentication
- Request logging
- Analytics

## Custom Middleware

Middleware functions you write can : 
- Execute ANY code
- Modify the `req` and `res` objects (they are the same throughought the request)
- End the request/response cycle
- Call `next`


## How do we use it?

The term used for using middleware is `mount`

In express, this is often used in conjunction with the `app.use` method, ESPECIALLY when we mount middleware __vertically__

Middleware can also be mounted __horitzontally__ - that means its typically used on a specific route





