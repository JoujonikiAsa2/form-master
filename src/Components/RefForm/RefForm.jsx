import { useEffect, useRef } from "react";
// * 3. controlled element: one object in a state holding all the input fields value
const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted')
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
    }
    useEffect(()=>{
        nameRef.current.focus()
        // helps to set the cursor
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user_name" ref={nameRef}/>
                <br />
                <input type="text" name="email" ref={emailRef} defaultValue={'asa@gmail.com'}/> 
                {/* default value set a initial value for the input field */}
                <br />
                <input type="text" name="phone" id="" ref={phoneRef}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;