import React from 'react';

const SimpleForm = () => {

      const handleSubmite = (e)=>{
    e.preventDefault();
    console.log("form submitted",e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  }

    return (
        <div>
            <form onSubmit={handleSubmite}>
        <input type="text" name="name" placeholder="Your Name" required /> <br />
        <input type="email" name="email" placeholder="Your Email" /> <br />
        <input type="password" name="password" placeholder="Your Password" />
        <br />
        <input type="submit" value="submit"/>
      </form>
        </div>
    );
};

export default SimpleForm;