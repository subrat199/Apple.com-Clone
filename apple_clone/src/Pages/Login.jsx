
import { useContext,useState} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
export default function Login() {
    const [email,setEmail]=useState("eve.holt@reqres.in")
    const [password,setPassword]=useState("cityslicka")
    const {login,isAuth,setToken,setIsAuth}=useContext(AuthContext)
    console.log(isAuth)
const HandleLogin= async (e)=>{
    e.preventDefault()
    const userDetails={
        email,
        password
    }
   const data=await  fetch(`https://reqres.in/api/login`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userDetails)
    })
    try {
        let data1=await data.json()
        setToken(data1.token)
        setIsAuth(true)
    } catch (error) {   
    }  
}
if(isAuth){
    return <Navigate to="/"/>
}
    return (
        <div>
            <form className = "auth_form" onSubmit={HandleLogin} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    value={email}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"   
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    value={password}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit"/>
            </form>                 
        </div>
    )
}