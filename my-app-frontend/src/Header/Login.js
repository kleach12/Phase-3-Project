// Due to the project guidelines and learning that rails has an easier way to implement user authentication I would like to in the future add this component

// import React, {useState} from 'react'
// import './Login.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Login({setLoginState}){
//   const [isUsername, setUsername] = useState("")
//   const [password, setPassword] = useState("")

//   function handleUsername(e){
//     setUsername(e.target.value)
//     console.log(isUsername)
//   }

//   function handlePassword(e){
//     setPassword(e.target.value)
//     console.log(password)
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     const formData = {
//       username: isUsername,
//       password: password
//     }

//     fetch("http://localhost:9292/users/signup",{
//         method:"POST",
//         headers:{
//           "Content-Type": "application/json",
//         },
//         body:JSON.stringify(formData)
//       })

//     setLoginState(false)
//     setUsername("")
//     setPassword("")
//   }

// return(
//     <form className='log-cont' onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input type='text'onChange={handleUsername} value={isUsername}/>
//         <label>Password</label>
//         <input type='password' onChange={handlePassword} value={password}/>
//         <button id = 'login' > Login </button>
//     </form>
//   )
// }

// export default Login