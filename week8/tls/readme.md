# TLS / HTTPS
> Transport Layer Security - encrypt network traffic to a server

## A Brief History / Explanation

SSL (Secure Sockets Layer) was a protocol developed by Netscape in 1995 - it was rebranded as TLS once it ver 3.0.  TLS is current in 1.2 (1.3 in development)

- TLS is a protocol designed to secure _other_ protocols
- Lowest level protocol is at the physical layer (converting electrical signals into 1's and 0's)
- IP protocol describes network addressing
- TCP describes how data can be transmitted reliably, in order, with no errors
- HTTP protocol describes how meaningful requests / responses are sent back and forth - along with the data thats contained within
- TLS works on top of TCP to secure any protocol that runs above the TCP layer (HTTP, SMTP, FTP)

## How to acquire a certificate

- in the olden days
  - pay $$$
  - show proof you own the domain
  - get some files
  - put them in your app
- in the new days
  - pay $0
  - show proof you own the domain
  - get some files
  - put them in your app

## Misc HTTPS
- http is served on port 80
  - https is served on port 443

- Client and server perform a TLS handshake, negotiating a session key and which version of encryption to use

- Server sends down the certificate to the browser which contains a public key

- Client confirms that the certificate was issued by a certificate authority the browser trusts

- Client sends a random message, encrypted with the public key

- Server echoes the decrypted message back to the client - proving the decryption worked


[https://github.com/Devaio/zootopia](Zootopia App)



=============


## Setting up an HTTPS Server
1. First, you'll need a server (e.g. a `DigitalOcean` droplet) and a domain name.
2. Buy a domain name from [IWantMyName](https://iwantmyname.com) or [NameCheap](https://namecheap.com).
3. Create an A record pointing your domain name to IP of droplet using your domain provider's dashboard. (An A record is a type of DNS record. It points a domain name to an IP address.)
4. Get a SIGNED certificate with [LetsEncrypt](https://certbot.eff.org/#ubuntutrusty-other).
5. Select webserver **"none of the above"**, and OS `ubuntu 14.04`.
6. Download and add execute permissions:
    ```bash
        $ wget https://dl.eff.org/certbot-auto
        $ chmod a+x certbot-auto

        # install
        $ ./certbot-auto

        # get cert
        $ ./certbot-auto certonly # your cert is in /etc/letsencrypt
    ```
7. Finally,
    ```javascript
        var HTTP = require('http'),
            HTTPS = require('https'),
            express = require('express'),
            logger = require('morgan')('common');
            app = express(),
            fs = require('fs'),
            ports = {
                http:  process.env.PORT || 80,
                https: process.env.PORT_SSL || 443
            },
            httpsConfig = { // https://nodejs.org/api/https.html
                 key:  fs.readFileSync('/etc/letsencrypt/live/<your_domain>/privkey.pem'),
                 cert: fs.readFileSync('/etc/letsencrypt/live/<your_domain>/cert.pem')
            };

        app.use(logger);

        app.get('/', (req, res) => {
            res.send('Hello!');
        });

        HTTP.createServer( app ).listen( ports.http );

        try {
            HTTPS.createServer( httpsConfig, app ).listen( ports.https );
        } catch (e) {
            console.error('Could not HTTPS server', e);
        }
    ```

### Forcing SSL for all requests sent to server.
> Want to automatically redirect `HTTP` traffic to `HTTPS` traffic? Use middleware!

```javascript
    // this middleware can redirect all traffic to HTTPs, but be sure to mount it BEFORE express.static middleware!!!
    app.all('*', ( req, res, next ) => {
        if( req.protocol === 'http' ) {
            res.set('X-Forwarded-Proto','https');
            res.redirect('https://'+ req.headers.host + req.url);
        } else {
            next();
        }
    });
```





