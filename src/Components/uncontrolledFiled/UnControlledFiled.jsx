import React, { useRef } from 'react';

const UnControlledFiled = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')


    const handleSubmite=(e)=>{
        e.preventDefault()
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
    }


    return (
        <div>
            <form onSubmit={handleSubmite} >
                <input type="email" name="email" ref={emailRef}  />
                <br />
                <input type="password" name="password" ref={passwordRef}  />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlledFiled;
