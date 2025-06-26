# simple backend

  0. Express.js
    - I am implementing the simple backend in express.js as it lightweight and easy to understand and work with.
    - We are probably going need a database, my pick is usually postgres. We can easily set it locally using docker and docker-compose.

  0. Authorization & Authentication
    - Re-visit the various authentication concepts and methods that exists and implement them for the simple backend.
      - [x] What is authorization?
      - [x] What is authentication?
      - [x] What is basic authentication and how do we implement it?
        - How does this help in our simple backend?
          - We are able to restrict access to our site and site routes, so that only requests that have included auth with correct username and password in their header are granted access.
        - Problems?
          - Passwords are usually not stored plainly in databases, we typically encrypt(salt and hash) them. We probably need this backend to reflect that.
      - [ ] What is token authentication and how do we implement it?
      - [ ] What is JWT's?
      - [ ] What is cookie-based authentication and how do we implement it?
      - [ ] What is OAuth?