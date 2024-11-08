import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "../components/root/Root";
import Statistics from "../components/statistics/Statistics";
import AppliedJobs from "../components/appliedJobs/AppliedJobs";
import Blogs from "../components/blogs/Blogs";
import JobCategory from "../components/jobcategory/JobCategory";
import AllJobs from "../components/allJobs/AllJobs";
import JobDetailes from "../components/jobdetailes/JobDetailes";
// 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
         path:"/",
         element:<Statistics/>,
         loader: ()=> fetch('/data/categories.json'),
         children:[
                {
                  path:"/jobcategory/:category_name",
                element:<AllJobs/>,
                loader:()=> fetch('../data/jobs.json'),
              },
              {
                path:"/",
                element:<AllJobs/>,
                loader:()=> fetch('../data/jobs.json'),
            
              }  
      ],

    },

      {
        path:"/appliedjobs",
        element: <AppliedJobs/>,
        loader: ()=> fetch("data/categories.json")
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/job-details/:id",
        element:<JobDetailes/>,
        loader: ()=> fetch('/public/data/jobs.json')
      }
    ]
  },

  ]);

  export {router}