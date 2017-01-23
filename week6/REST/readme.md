REST

Representational State Transfer

Methods
- Get  - read only request for information
- Post - write only delivery of information
- Put  - update an existing piece of information the server
- Delete  - write only, remove a piece of information from the server

CRUD
- Create
- Read
- Update
- Delete


Idempotency
- A safe request to run, has the same effect if it is run one or more times. (Get, Put, Delete)

Response Code
- 200's: success
- 200 : successful
- 201: successfully created
- 204: no content
- 304: not modified
- 400's: error
- 400: malformed request
- 404: not found
- 500's: server error, forbidden, no access/permission

REST is a convention, not a framework, not a requirement.  Use it as often as possible to make URLs intuitive and effective,
but if it doesn't meet the functional need, do what you need to do.

Not all HTTP verbs (methods) make sense for every resource (route).  Use only the ones you need.

Examples:
- view your current account balance.    GET::/api/accounts/123?fields=balance
- change your home address.             PUT::/api/accounts/123  (info in the body)
- add a new credit card                 POST::/api/accounts/123/card (info in the body)
- make a deposit                        POST::/api/accounts/123/deposit (info in the body)






