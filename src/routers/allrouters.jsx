import {
    createBrowserRouter,
    Link,
  } from "react-router-dom";
import Dashboard from "../layout/dashbord/Dashbord";
import Home from "../component/home/Home";


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <div className="h-screen text-center mt-20"><h2>Page Not Found </h2> <Link to='/'>back Home</Link></div>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/newListing",
          element: <div>New Listing</div>
        },
        {
          path: "/about",
          element: <div>about</div>
        },
        {
          path: "/favorites",
          element: <div>Favorites</div>
        },
      ]
    },
  ]);

  export default router;