import useInputState from "../../hooks/useInputState";

const CustomHookForm = () => {
    // const [name, handleOnChange]= useInputState('Rajani')
    const emailState = useInputState('rajani@sojoni.go')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('Submited',emailState.inputValue);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input onChange={handleOnChange} type="text" name={name} /> */}
                <br />
                <input {...emailState} type="email" name="email"/> 
                {/*... are the spread and rest operators.  */}
                <br />
                {/* <input onChange={handleOnChange} type="password" name={name} id="" /> */}
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;