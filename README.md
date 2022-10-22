# MERN-Shoppingcart-emaizona
##[MERN Stack ECommerce Website]

Mern shopping cart created in Mongodb,expressJs, NodeJs,Bootstrap,React-bootstrap and Reactjs

#Steps and details

1. Create react-app
2. Create Git repository
3. Add the List Products
   1. Create product array
   2. add product images
   3. render products
   4. style products
4. Add routing

   1. npm in react-router-dom
   2. Create route for Hompage
      1. Create Browser routes, Routes, Route and Link imported.
   3. Create router for product screen
      1. usePrams hooks for products path
         {const params = useParams();
         const { slug } = params;}}

5. Create Node.JS Server(Create backend floder)
   1. run npm init in root folder
   2. Update package.json set type:module
   3. Add .js to imports
   4. npm install express
   5. Create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move product.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
   13. install the nodemon (npm i nodemon --save-dev)
   14. config default method to strat ("start":"nodemon server")
   15. npm start for runign local backend port
6. Fetch products From backend
   1. set proxy in pacakge.json (frontend `package.json file` and do not stop the backend server like nodejs server)
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
7. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from useReducer
8. Add bootstrap UI framewrok
   1. npm install react-bootstrap bootstrap react-router-bootstrap (LinkContainer)
   2. update app.js
9. Created Products and Rating Components
   1. Create Rating component
   2. Create product Componet
   3. Use Rating componet in Product component
10. Create product details screen
   1. fetch product form backend
   2. create 3 columns for image, info and action
   3. install react-helmet-async for adding title in addressbar
   4. <Helmet><title>{product.name}</title></Helmet>
11. Create Loading and Message Component
   1. Create loading component
   2. use spinner component
   3. create message component
   4. create utils.js to define getError function
12. Implement Add to Cart
   1. Create React Context
   2. define reducer
   3. implement add to cart button click handler
 13. complete add to cart
   1. check exist item in the cart
   2. check count in stock in backend  
14. Create cart screen
   1. create 2 columns
   2. display items list
   3. create action column
15. complete cart screen
   1. click handler for inc/dec item
   2. click handler for remove item
   3. click handler for checkout
16. Create signin page
   1. create sign in form
   2. add email ana password
   3. add sign button
17. Connect to MangoDB Database
   1. create atlas mongodb database
   2. install local mongodb database
   3. npm install mongoose
   4. connect to mongodb databse
18. Seed sample data
   1. create product model
   2. create user model
   3. create seed route
   4. use route in server.js
   5. seed sample product
19. seed sample users
   1. create user model
   2. seed sample users
   3. create user routes
20. Create Signin Backend API
   1. create signin api ( npm i express-async-handler)
   2. npm install jsonwebtoken 
   3. define generateToken
21. complete Signin Screen
   1. handle submit action
   2. save token in store and local storage
   3. show user name in header
22. create shipping screen
   1. create form inputs
   2. handle save shipping address
   3. add checkout wizard bar
23. Create Sign Up Screen
   1. create inputs forms
   2. handle submit
   3. create backend API
24. Implement Select Payment Method Screen
   1. create input forms
   2. handle submit
25. Create Place Order Screen
   1. show cart items, payment and adress
   2. handle place order action
   3. create order create api
26. Implement Place Order Action
   1. handle place order action
   2. create order create API