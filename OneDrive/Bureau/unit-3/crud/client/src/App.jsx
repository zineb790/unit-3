/* eslint-disable no-unused-vars */
import { useState } from 'react'
import'./App.css'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Users from './Users.jsx'
import UpdateUser from './UpdateUser.jsx'
import CreateUser from './CreateUser.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}
          ></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/> }></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
