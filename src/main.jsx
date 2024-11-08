import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import {RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import { DataProvider } from './contextApi/DataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DataProvider>
           <RouterProvider router={router}/>
      </DataProvider>
  </StrictMode>,
)
