import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import App from './App'
import './index.css'


import Home from './Pages/Home/Home'

import FurnitureSelection from './Pages/FurnitureSelection/FurnitureSelection'
import PlantsSelection from './Pages/PlantsSelection/PlantsSelection'
import LayoutProject from './Pages/LayoutProject/LayoutProject'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='plantsselection' element={<PlantsSelection/>}/>
        <Route path='furnitureselection' element={<FurnitureSelection/>}/>
        <Route path='layoutproject' element={<LayoutProject/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
