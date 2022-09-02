import './App.css'
import UltComp from './UltComp'
import UserSign from './SignIn/UserSign'
import{Routes, Route} from 'react-router-dom'
import { useState } from 'react'


function App(){
  const [ user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)


  // const loginPage = <Route path ='/' element={<UserSign setUser= {setUser} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>} />
  // const homePage = 
  return(
    <div>
      <Routes>
        <Route path ='/' element={<UserSign setUser= {setUser} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>} />
        <Route path ='/userLoggedIn' element={<UltComp user = {user}/> } />
      </Routes>
    </div>
  )
}

export default App