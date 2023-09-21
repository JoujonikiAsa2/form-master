const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.user_name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user_name"/>
                <br/>
                <input type="email" name="email"/>
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;