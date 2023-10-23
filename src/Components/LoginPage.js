import React,{useState} from 'react';
import axios from 'axios';

const LoginPage = ({setToken}) => {
    const [data,setData] = useState({email:"",password:""});


    function handelInput(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    
   async function hadelSubmit(e)
    {
        e.preventDefault();

          try {
            const response= await axios.post("https://instagram-express-app.vercel.app/api/auth/login",{"email":data.email,"password":data.password});
            setToken(response.data.data.token);
            alert(response.data.message);
            localStorage.setItem("token" , response.data.data.token);
            setData({...data,email:"",password:""});
        } catch (error) {
            alert(error.response.data.message);
        }
    
    }

    return (
        <div className='LogInPage'>
            <form onSubmit={hadelSubmit}  className='Form'>
                <input onInput={handelInput} value={data.email} type='email' name='email' placeholder='axy@gmail.com' required></input>
                <input onInput={handelInput} value={data.password} type='password' pattern='[0-9]{3}' name='password' placeholder='Enter password [0-9] minlength = 3' required ></input>
                <button type='submit'>Log In</button>
            </form>
          
        </div>
    );
}

export default LoginPage;
