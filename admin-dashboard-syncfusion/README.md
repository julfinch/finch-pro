# FinchPro
  -Live Site URL: [https://finch-pro.vercel.app/](https://finch-pro.vercel.app/)

  -Fullstack MERN web app that utilizes some of the great REACT UI components by Syncfusion. .
  
## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#process)
  - [Install Dependencies](#dependencies)
  - [Additional Info](#additional-info)
  - [Built With](#built-with)
- [Author](#author)

## Overview

### Screenshot

![](./_readme_img/FinchPro-1-1.png)
![](./_readme_img/FinchPro-1-2.png)
![](./_readme_img/FinchPro-2-1.png)
![](./_readme_img/FinchPro-2-2.png)

### Links

  -Live Site URL: [https://finch-pro.vercel.app/](https://finch-pro.vercel.app/)

## My Process

### Install Dependencies

```js
yarn add -D tailwindcss autoprefixer postcss

Add the following:
	@syncfusion/ej2": "^20.1.61",
    @syncfusion/ej2-react-calendars
    @syncfusion/ej2-react-charts
    @syncfusion/ej2-react-dropdowns
    @syncfusion/ej2-react-grids
    @syncfusion/ej2-react-inputs
    @syncfusion/ej2-react-kanban
    @syncfusion/ej2-react-popups
    @syncfusion/ej2-react-richtexteditor
    @syncfusion/ej2-react-schedule
    react-icons": "^4.4.0",
```

### Additional Info
1. **Finch-Tea CORS Error where Finch-Pro can't fetch data from Finch-Tea Next.js API.**

  ```shell
    Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://finch-tea.vercel.app/api/orders. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 201.
  ```

  Solution: [https://vercel.com/guides/how-to-enable-cors](https://vercel.com/guides/how-to-enable-cors)
  1. Go to Finch-Tea **next.config.js** and add the code below:

    ```shell
      // next.config.js
      module.exports = {
        async headers() {
          return [
            {
              // matching all API routes
              source: "/api/:path*",
              headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" },
                { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
              ]
            }
          ]
        }
      };
    ```

    FINAL CODE:

      ```shell
        /** @type {import('next').NextConfig} */
        const nextConfig = {
          reactStrictMode: true,
          swcMinify: true,
          images: {
            domains:["res.cloudinary.com"]
          },
          async headers() {
            return [
              {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" },
                  { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
              }
            ]
          }
        }

        module.exports = nextConfig
      ```

1. **NeuBlock server deployment error on Render.com**
  1. Delete the **yarn.lock** inside the NeuBlock server folder.
  1. Go to neublock-backend dashboard then click settings. Under settings, change the Build Command and Start Command to npm instead of the default yarn.
    ```shell
      Build Command: server/ $ npm install
      Start Command: server/ $ npm run start
    ```
    
1.  **Content Security Policy: The page's settings blocked the loading of a resource at inline ("default-src").**
  1. [https://stackoverflow.com/questions/56486825/how-to-fix-content-security-policy-the-page-s-settings-blocked-the-loading-of](https://stackoverflow.com/questions/56486825/how-to-fix-content-security-policy-the-page-s-settings-blocked-the-loading-of)
    1. Using CSP Express Header
      ```shell
        npm i csp-express-header
      ```
      ```shell
      import { expressCspHeader, INLINE, NONE, SELF } from "express-csp-header"

      app.use(expressCspHeader({ 
          policies: { 
              'default-src': [expressCspHeader.NONE], 
              'img-src': [expressCspHeader.SELF], 
          } 
      }));  
      ```
    1. Using Helmet
      ```shell
        app.use(
          helmet.contentSecurityPolicy({
            useDefaults: false,
            "block-all-mixed-content": true,
            "upgrade-insecure-requests": true,
            directives: {
              "default-src": [
                  "'self'"
              ],
              "base-uri": "'self'",
              "font-src": [
                  "'self'",
                  "https:",
                  "data:"
              ],
              "frame-ancestors": [
                  "'self'"
              ],
              "img-src": [
                  "'self'",
                  "data:"
              ],
              "object-src": [
                  "'none'"
              ],
              "script-src": [
                  "'self'",
                  "https://cdnjs.cloudflare.com"
              ],
              "script-src-attr": "'none'",
              "style-src": [
                  "'self'",
                  "https://cdnjs.cloudflare.com"
              ],
            },
          }),
          helmet.dnsPrefetchControl({
              allow: true
          }),
          helmet.frameguard({
              action: "deny"
          }),
          helmet.hidePoweredBy(),
          helmet.hsts({
              maxAge: 123456,
              includeSubDomains: false
          }),
          helmet.ieNoOpen(),
          helmet.noSniff(),
          helmet.referrerPolicy({
              policy: [ "origin", "unsafe-url" ]
          }),
          helmet.xssFilter()
            )
      ---

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- ReactJS
- Vite

---
 
## Author

- Twitter - [@julfinch](https://www.twitter.com/julfinch)
