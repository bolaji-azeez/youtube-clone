import React from 'react'
import ReactDOM from 'react-dom/client'
import { Globalstyle } from './assets/Globalstyles.tsx'

import { RouterProvider } from 'react-router-dom'
import Index from './Routes/AllRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Globalstyle />
    <RouterProvider router={Index} />
  </React.StrictMode>,
)
