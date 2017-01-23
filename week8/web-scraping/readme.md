# Web Scraping

## What is it?

Web scraping is the process of making requests to servers and then doing something with the result.

Servers exist to accept requests and send responses to whatever made the request.  The entity making the request doesn't have to be a browser

## Why would you use it?

- You like their info and want to use it
  - AND THEY DONT HAVE AN API


## Install on Digital Ocean

1. Create a MEAN droplet on digitalocean.
2. SSH into your droplet.
3. Update Linux packages: `sudo apt-get update`
4. Install electron: `npm install -g electron-prebuilt`
5. Install missing dependencies for electron, as instructed by electron's github page: https://github.com/electron/electron/blob/master/docs/development/build-instructions-linux.md
6. (Not necessary but super helpful) Turn on debug logging for electron: `export DEBUG=nightmare`
7. Install xvfb: `apt-get install xvfb`.
8. Run nightmare-scraper.js through xvfb: `xvfb-run node nightmare-scraper.js`