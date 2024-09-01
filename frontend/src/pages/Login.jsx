import { useState } from "react";

function Login() {

    const [state, setState] = useState("Login");
    const [formData, setformData] = useState({
      username:"",
      email:"",
      password:""
    })

    const handleChange = (e) => {
      setformData({...formData,[e.target.name]:e.target.value})
    }

    const Login = async() => {
      console.log("Login trigered",formData);
      let responsiveData;
      await fetch("http://localhost:4000/login", { 
        method:'POST',
        headers:{
          Accept: 'application/formData',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      }).then((response) => response.json()).then((data) => responsiveData=data)
      if (responsiveData.success) {
        localStorage.setItem('auth-token',responsiveData.token);
        window.location.replace('/');
      }
    }

    const SignUp = async() => {
      console.log("signup triggered",formData);
      let responsiveData;
      await fetch("http://localhost:4000/signup", { 
        method:'POST',
        headers:{
          Accept: 'application/formData',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      }).then((response) => response.json()).then((data) => responsiveData=data)
      if (responsiveData.success) {
        localStorage.setItem('auth-token',responsiveData.token);
        window.location.replace('/');
      }
    }
  


  return (
    <section className="max_padd_container flex-col flex-center pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
      <h3 className="h3">{state}</h3>
    <div className="flex flex-col gap-4 mt-7">
      {state === "SignUp"?
      <input onChange={handleChange}
      value={formData.username} 
      type="text" name="username"
      placeholder="Your Name" 
      className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
      :''}
      <input onChange={handleChange}
      value={formData.email} 
      type="email" name="email"
      placeholder="Email" 
      className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
      <input onChange={handleChange}
      value={formData.password} 
      type="password" name="password"
      placeholder="Password" 
      className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
    </div>

    <button onClick={state==='Login'?Login:SignUp} className="btn_dark_rounded w-full my-5 !rounded-md">Continue</button>
    {state === 'Login'?<p className="text-black font-bold">Create an account? <span onClick={() => setState("SignUp")} className="text-secondary underline cursor-pointer">Click here</span></p>:
    <p className="text-black font-bold">Already have an account? <span onClick={() => setState("Login")} className="text-secondary underline cursor-pointer">Login</span></p>}

    
    <div className="flexCenter mt-6 gap-3">
      <input type="checkbox" name="" id=""/>
      <p>by continuing, I agree to the terms of use & privacy policy.</p>
    </div>
    </div>
    </section>
  )
}

export default Login