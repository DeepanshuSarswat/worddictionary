import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useFormik } from "formik";
import { validation } from "../../Utils/Validation";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import submitUserData from "../../Utils/submitUserData"
const initialValues = {
    FirstName: "",
    LastName: "",
    userEmail: "",
    userPassword: "",
  };

const Login = () => {
    const navigate = useNavigate()
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validation,
      onSubmit: (values, action) => {
        console.log(
          values
        );
        localStorage.setItem("userData", JSON.stringify(values))
        if(localStorage.getItem("userData")){
            navigate("/Deshbord")
        }
        action.resetForm();
      },
    });
  console.log(
    " errors",
    errors
  );

  useEffect(()=>{
    if(localStorage.getItem("userData")){
        navigate("/Deshbord")
    }
  },[])
    return ( 
        <Loginpage>
            <Wrapper>
                <LoginPageHeader>
                    <h3>Deepanshu Sarswat <span>.</span> </h3>
                    <p>Home</p>
                    <p>Join</p>
                </LoginPageHeader>

                <LoginPageBody>
                  <>
                  <p>START FOR FREE</p>
                    <h3>Create new account <span>.</span></h3>
                    <p>Already A Member? </p>
                  </>

<form onSubmit={handleSubmit}>
                    <LoginForm>

                    <LoginUserNameWrapper>

                      <div>
                      <LoginInputWrapper>
                       <InputLabel>
                        First Name
                        </InputLabel>
                       <UserInput>
                       <input
                       placeholder="Deepanshu "
                       onChange={handleChange}
                       onBlur={handleBlur}
                       name="FirstName"
                       value={values.FirstName}
                       />
                            <AccountCircleIcon className="Icon" />
                           
                           
                        </UserInput>
                        
                       </LoginInputWrapper>
                       <ErrorStatus>
                        {errors.FirstName && touched.FirstName ? (
                      <p className="form-error">{errors.FirstName}</p>
                    ) : null}

                        </ErrorStatus>
                      </div>

                     <div>
                     <LoginInputWrapper>
                       <InputLabel>
                        Last Name
                        </InputLabel>
                       <UserInput>
                       <input
                       placeholder="Sarswat"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       name="LastName"
                       value={values.LastName}
                       />
                            <AccountCircleIcon />
                           
                        </UserInput>
                      
                       </LoginInputWrapper>
                       <ErrorStatus>
                        {errors.LastName && touched.LastName ? (
                      <p className="form-error">{errors.LastName}</p>
                    ) : null}
                        </ErrorStatus>
                     </div>

                    </LoginUserNameWrapper>

                    <UserLoginCredentials>
                    <LoginInputWrapper>
                    <InputLabel>
                        User Email
                        </InputLabel>
                       <UserInputEmail>
                       <input 
                       placeholder="sarswatdeepanshu@gmail.com"  type={"email"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       name="userEmail"
                       value={values.userEmail}
                       />
                            <EmailIcon className="Icon" />
                           
                           
                        </UserInputEmail>
                     
                        </LoginInputWrapper>
                        <ErrorStatus>
                        {errors.userEmail && touched.userEmail ? (
                      <p className="form-error">{errors.userEmail}</p>
                    ) : null}
                        </ErrorStatus>
                    </UserLoginCredentials>

                    <UserLoginCredentials>
                    <LoginInputWrapper>
                    <InputLabel>
                        User Password
                        </InputLabel>
                       <UserInputEmail>
                       <input 
                       placeholder="userPassword" type={"Password"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       name="userPassword"
                       value={values.userPassword}
                       />
                            <KeyIcon className="Icon" />
                           
                           
                        </UserInputEmail>
                        
                        </LoginInputWrapper>
                        <ErrorStatus>
                        {errors.userPassword && touched.userPassword ? (
                      <p className="form-error">{errors.userPassword}</p>
                    ) : null}
                        </ErrorStatus>
                    </UserLoginCredentials>
                   

                   <SubmitButton>
                    <ChangeMethod> Change Method</ChangeMethod>
                    <CreateAccount>Create Account</CreateAccount>
                   </SubmitButton>
                </LoginForm>
                </form>
                </LoginPageBody>


                
            </Wrapper>
        </Loginpage>
     );
}
 
export default Login;

const Loginpage = styled.div`
font-family: 'Source Sans Pro', sans-serif;
position:relative;
height:100vh;
background-image: linear-gradient( to right, rgba(0,0,0,0.9) 42%, rgba(0,0,0,0.2)),url("images/Background.jpg");
background-size: cover;
background-repeat: no-repeat;
`

const Wrapper = styled.div`
padding:24px;
position: absolute;
top:60px;
left:60px;
// height: 800px;
// background: red;
width: 650px;
padding-bottom:0;
`
const LoginPageHeader = styled.div`
display: flex;
justify-content: space-between;

align-items: center;
h3{
    color:white;
    font-size:2.5rem
}

p{
    color:#0ea5e9;
    font-size:1.1rem;
    font-weight:500;
    cursor:pointer;
    transition-duration: 220ms;
    
    &:hover{
        color:#0369a1;
    }
}

span{
    color:#0ea5e9;
    fon-size:1.6rem
}

`

const LoginPageBody = styled.div`
padding:24px;
margin-top:2rem;
// height:700px;
h3{
    margin-bottom: 1.3rem;
    font-size:3.5rem;
    font-weight:800;
    color:white;
}
p{
    font-size:1.5rem;
    font-weight:500;
    // margin-bottom: 1.2rem;
    color:#0ea5e9;
    cursor:pointer;
    // margin-bottom:12px;
}
span{
    color:#0ea5e9;
    fon-size:1.6rem
}
`

const LoginForm = styled.div`
width:550px;

`;

const LoginUserNameWrapper = styled.div`
background:trandsprent;
display: flex;
justify-content: space-between;
// align-items: center;
margin-bottom:22px;
height:95px;

`;

const UserInput = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:200px;
background:#262626;
color:white;
padding-bottom:12px;
input{
    width:100%;
    font-size:1.5rem;
    background:#262626;
    color:white;
    border:0;
    outline:0;
    padding-left:0px
}



`;

const LoginInputWrapper = styled.div`
color:white;
background:#262626;
padding:0 12px;
border-radius: 12px;
border: 2px solid transparent;

&:focus-within {
    border: 2px solid rgb(14, 165, 233);;
  }
  .Error-status{
    font-size:7px;
  }
`;

const InputLabel = styled.div`
padding:6px 0px
`

const UserLoginCredentials = styled.div`
margin-bottom:22px;
height:94px;
`

const UserInputEmail = styled.div
`
display: flex;
justify-content: space-between;
align-items: center;
width:525px;
background:#262626;
color:white;
padding-bottom:12px;
input{
    width:100%;
    font-size:1.5rem;
    background:#262626;
    color:white;
    border:0;
    outline:0;
    padding-left:0px
}
`

const SubmitButton = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
`
const ChangeMethod = styled.button`
background:#262626;
color:#f5f5f5;
padding:22px;
font-size:1.2rem;
width:225px;
font-weight:600;
border-radius: 12px;
outline:0;
border:0;
cursor:pointer;
transition-duration: 220ms;

&:hover{
    background:#57534e;
    
}
`;

const CreateAccount = styled.button`
background:rgb(14, 165, 233);;
color:#f5f5f5;
padding:22px;
font-size:1.2rem;
width:225px;
font-weight:600;
border-radius: 12px;
outline:0;
border:0;
cursor:pointer;
transition-duration: 220ms;

&:hover{
    background:#0284c7;
    
}
`

const ErrorStatus = styled.div`
background:transparent ;
p{
    font-size:12px;

}
`
