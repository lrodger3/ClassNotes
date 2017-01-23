# Cookies and Sessions

## Cookies
- Files that store data in the browser
  - Can be temporary or permanent
  - If they are cleared, a website often can't remember who you are
    
- Where do they come from?
  - The _server_ is going to tell the _browser_ to store cookies
    - What cookie to store / what info to associate with it
  - Cookie information is passed back up to the server on EVERY request in the `headers`
    - ONLY cookies from THAT host are passed up
    

## Sessions
- Objects that represent info about a user on the server
  - How the server remembers who you are
  
- Cookies are sent up from the browser to the server on every request.  These cookies are often mapped to session objects










