import React, { useState } from 'react';

const ControlledFiled = () => {

    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    

    const handleSubmite =(e)=>{
        e.preventDefault()
        console.log(e);

        if(password.length <6){
            setError("6 charecters or longer password")
        }else{
            setError('')
        }
    
    }

    const handlePasswordonChange = (e)=>{
        console.log(e.target.value);
        setPassword(e.target.value)


        // if(password.length < 6){
        //     setError("password must be 6 characters or longer")
        // }else{
        //     setError('')
        // }
    }


    return (
       <div>
         <form onSubmit={handleSubmite}>
            <input type="email" name="email" id="" required />
        <br /> 
            
            <input type="password" name="password" onChange={handlePasswordonChange} defaultValue={password} id=""  required />
            <br />
            <input type="submit" value="submit" />
        </form>
        <p><small style={{color:"red"}}>{error}</small></p>
       </div>
    );
};

export default ControlledFiled;