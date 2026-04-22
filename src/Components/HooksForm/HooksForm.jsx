import React from 'react';
import useFormFiled from '../../Hooks/hookFormFiled/HookFormFiled';

const HooksForm = () => {

    const [name,nameOnChange]=useFormFiled('')
    const [email,emailOnChange]=useFormFiled('')
    const [password,passwordOnChange]=useFormFiled('')

    const handleSubmite =e=>{
        e.preventDefault()
        console.log('submit',name ,email,password);
    }



    return (
        <div>
            <form onSubmit={handleSubmite}>
            <input type="text" onChange={nameOnChange} defaultValue={name} />
            <br />
            <input type="email" name="email" onChange={emailOnChange} />
            <br />
            <input type="password" name="password" onChange={passwordOnChange}  />
            <br />
            <input type="submit" value="submit" />


            </form>
        </div>
    );
};

export default HooksForm;