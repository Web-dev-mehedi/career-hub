import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Statistics from "../components/statistics/Statistics";
import AppliedJobs from "../components/appliedJobs/AppliedJobs";
import Blogs from "../components/blogs/Blogs";
import JobCategory from "../components/jobcategory/JobCategory";
// 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
         path:"/",
         element:<Statistics/>,
         loader: ()=> fetch('data/jobs.json'),
         children:[
          {
            path:"/jobcategory",
            element:<JobCategory/>,
            loader: ()=> fetch("data/categories.json")
           
          }
         ]
      },
      {
        path:"/appliedjobs",
        element: <AppliedJobs/>,
        loader: ()=> fetch("data/categories.json")
      },
      {
        path:"/blogs",
        element:<Blogs/>
      }
    ]
    },

  ]);

  export {router}