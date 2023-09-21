import { useState } from "react";
const FormPractice = () => {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(phone)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleName}
                type="text" name="name" placeholder="Name.."/>
                <br />
                <input 
                onChange={handleEmail}
                type="text" name="email" placeholder="Email.."/>
                <br />
                <input 
                onChange={handlePhone}
                type="text" name="phone" placeholder="Phone.."/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormPractice;