import { useState } from "react";

// Controlled component

const StateFullForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name,setName] = useState(null)
    const handleSubmit = e => {
        e.preventDefault();
        setPassword(e.target.value)
        console.log(name,email,password)
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input
                onChange={handleEmailChange} 
                type="email" name="email" />
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFullForm;