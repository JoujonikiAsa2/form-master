import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReUseableForm from './Components/ReUseableForm/ReUseableForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import FormPractice from './Components/FormPractice/formPractice'
// import RefForm from './Components/RefForm/RefForm'
// import CustomHookForm from './Components/Hooks/CustomHookForm'
function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('Signup form data', data)
  // }

  // const handleLoginSubmit = data => {
  //   console.log('Login form data', data)
  // }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm>
       */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <FormPractice></FormPractice>
        */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}

      {/* Using props */}
      {/* <ReUseableForm
        formTitle='Sign Up'
        btnText='signup'
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>SignUp</h2>
        </div>
      </ReUseableForm>
      <ReUseableForm
        formTitle='Login'
        btnText='Login'
        handleSubmit={handleLoginSubmit}>
        <div>
          <h2>Login</h2>
        </div>
      </ReUseableForm>
      <ReUseableForm
        formTitle='Edit Profile'
        btnText='Login'>
        <div>
          <h2>Profile</h2>
        </div>
      </ReUseableForm> */}
      <GrandPa></GrandPa>
    </>
  )
}

export default App
