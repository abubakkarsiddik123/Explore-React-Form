import React from 'react';

const FormAction = () => {

        const handleAction =(fromData)=>{

            console.log(fromData.get("name"))
            console.log(fromData.get("email"))
        }


    return (
        <div>
            <form action={handleAction}>
                <input type="text" name='name' placeholder='Your name' /> <br />
                <input type="email" name='email' placeholder='Your Email' /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;