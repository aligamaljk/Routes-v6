
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './Components/Home/Home'
import CreatePost from './Components/Posts/CreatePost'
import PostDetails from './Components/Posts/PostDetails'
import About from './Components/About/About'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error'

function App() {
  
  return (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home/>} />
          <Route path='about/*' element={<About/>}>
            <Route path='hello' element={<>
                <div>
                  <br /> <br /> <hr /> <br />
                  <p>Helloooooooo</p>
                </div>
                </>} />
            </Route>
          <Route path='create' element={<CreatePost/>} />
          <Route path='post/:id' element={<PostDetails/>} />
          <Route path='/hi' element={<Navigate to="/about" />} />
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App
