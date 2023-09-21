import PropTypes from 'prop-types'
import { children } from 'react';
const ReUseableForm = ({formTitle, btnText,handleSubmit,children}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault()
        const data = {
            name: e.target.user_name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            {children}
            {/* <h2>{formTitle}</h2>  */}
            {/*using props*/}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="user_name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={btnText} />
            </form>
        </div>
    );
};

ReUseableForm.propTypes = {
    formTitle: PropTypes.string,
    btnText: PropTypes.string,
    handleSubmit: PropTypes.func
}
export default ReUseableForm;