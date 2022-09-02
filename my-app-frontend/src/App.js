import './App.css'
import UltComp from './UltComp'
import UserSign from './SignIn/UserSign'
import{Routes, Route} from 'react-router-dom'


function App(){
  return(
    <div>
      <Routes>
        <Route path ='/' element={<UserSign/>} />
        <Route path ='/userLoggedIn' element={<UltComp/> } />
      </Routes>
    </div>
  )
}

export default App