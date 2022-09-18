# MERN-Shoppingcart-emaizona

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
