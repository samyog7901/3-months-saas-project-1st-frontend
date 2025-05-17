import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import CreatePage from './pages/CreatePage'
import Singlepage from './pages/Singlepage'


function App(){ 

  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<HomePage/>} /> 
    <Route path = "/edit-book" element = {<EditPage/>} /> 
    <Route path = "/create-book" element = {<CreatePage/>} /> 
    <Route path = "/single-book" element = {<Singlepage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
