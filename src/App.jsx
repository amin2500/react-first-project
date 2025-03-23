import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayouts from "../src/layouts/MainLayouts"
import Homepage from './pages/homepage'
import JobPages from "./pages/JobPages"

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts/>}> 
  <Route path='/react-first-project' element={<Homepage/>} /> 
  <Route path='/react-first-project/jobs' element={<JobPages/>} /> 
  </Route>
)
)

const App = ()=>  {
  

  return  <RouterProvider router={router}/>
   

   

   
}

export default App
