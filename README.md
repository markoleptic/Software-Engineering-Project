# CS3203_Project

## frontend

### config folder
- allowedOrigins.js is used in corsOptions.js to specify origins to take requests from (like the frontend)
- config.js is the configuration file for the mysql database. It uses variables from the .env file (not tracked in github)
- corsOptions.js is used to define the allowed origins inside of backend entry point (server.js)

### controllers folder
- handles the logic for most of the backend URI's

- confirmationController: validates the link that user recieved in email from registerController, and changes the value of "confirmed" variable in the database
- loginController: finds username and password in database and compares them with user input from frontend. Updates the refreshToken in the databse, returns a cookie to the user with the refreshToken, and returns the username and accessToken to the frontend
- logoutController: deletes user cookie and refreshToken from database
- recsController: nothing yet
- refreshTokenController: returns new accestoken and username
- registerController: creates confirmation token, creates new user in database, sends email to the user

### middleware
- credentials.js: checks that api user is part of allowedOrigins
- verifyJWT.js: supposed to check that the frontend header request to make sure their access token is valid, not sure if working

### models
- index.js: boilerplate code that initially creates the database, can ignore
- users.js: defines an individual database table (users), and defines all the variables and constraints for variables

### routes
- all of the routes are just used to link to the controllers for a certain type of request. All of our requests only have one type of request, so this could've just been collapsed into server.js

### entry point (server.js)
- defines what middleware to use for every request, and forwards requests into their specific routes

## backend

### public
- just contains the website icon and index.html. The only html inside index.html is the head information along with "root" which is referenced in index.js and essentially the entire react app

### src (generic source folder)

#### api
- just contains axios.js which defines the axios object we use for backend requests

#### componenets
- each "part" of the website is broken down into individual components that are all imported into App.js

- AuthCheck: (mostly logic) essentially filters content based on whether the user is logged in or not
- Header: (no logic) header for website
- Home: (no logic) homepage for website 
- Login: (logic and rendering) displays a login form and handles the logic for logging a user in. Sends a post request to back end to attempt the log in, and if successful redirects to /profile page
- Navbar: (no logic) persistant navigation bar
- PersistCheck: (mostly logic) acts similarly to AuthCheck, but instead checks to see if the user has specified to "trust this device", so that we can automatically request a new accessToken when the user reloads the page after logging in. Without this, the user would have to reenter their login information everytime they refreshed the page or changed websites.
- Profile (logic and rendering) displays logout button and uses the useLogout hook to log the user out.
- Recs: nothing yet
- Register: (logic and rendering) displays a sign up form and handles the logic whether to allow the user to register or not. anthing with "aria" is just used for accessibility


#### context
- AuthContext: used so that the entire application can have access to the variables inside of the "AuthProvider", which are auth and persist. These values are automatically passed down to anything that subscribes to using "useAuthContext"

#### hooks
- React has 15 default hooks, which include useState and useEffect (which we use throughout the app). This folder contains custom hooks. Custom hooks are useful when we have component logic that needs to be used by multiple components. Basically functions that can handle data that is updating throughout the app

- useAxiosPrivate: not currently being used, but interacts with verifyJWT in the backend
- useLogout: clears the "auth" global variable using useAuthContext, and sends get request to backend
- useRefreshTokens: updates "auth" global variable with new accessToken

#### App.js
- this is where all the components are combined
- we use Routes and Route from react-router-dom to to handle what is rendered to the app for each path
- "Routes" wraps around all the individual Routes
- individual "Route"s use a path and a component
- an individual "Route"  can also be used as to protect routes, which is why PersistCheck and AuthCheck wrap around the /profile route

#### index.css
- stylesheet controlling the appearance of app
- react components can use css styles just like a normal html file
- instead of using class="classThatIsReferencedInCSS", we instead use className="classThatIsReferencedInCSS"
- some styles are applied using every html element (such as div, body, header)
- some styles are applied to only specific classNames (.text-link)
- some styles are applied using a combination of the above:
  - "nav li.nav-item-left" applies the style only if "nav-item-left" is the className of a "ul" that is a child of "nav"

#### index.js
- entry point to front end of react app
- imports the css style sheet
- wraps App.js Route (which is all possible paths for application) with:
  - React.StrictMode (just more error checks, not entirely necessary)
  - AuthProvider: I think this is here so that the entire application is considered "children" and thus has access to it
  - Routes: because every individual Route has to be wrapped with this

## References

Backend:   
https://github.com/gitdagray/express_jwt  
https://youtu.be/favjC6EKFgw

Frontend:  
https://github.com/gitdagray/react_persist_login/
https://youtu.be/brcHK3P6ChQ  
https://youtu.be/X3qyxo_UTR4  
https://youtu.be/oUZjO00NkhY  
https://youtu.be/nI8PYZNFtac  
https://youtu.be/27KeYk-5vJw  

