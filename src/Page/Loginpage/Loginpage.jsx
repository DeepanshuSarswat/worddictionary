import styled from "styled-components";
import { useFormik } from "formik";
import { validation } from "../../Utils";
import { submitUserData } from "../../Utils/submitUserData";
import { useEffect } from "react";
import { useNavigate } from "react-router";

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
        submitUserData(values);
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
            <LoginForm>
                <h1>Create new account</h1>
                <form onSubmit={handleSubmit}>
                    
                    <UserName>
                 
                 <NameWrapper>
                    <NameWithIcons>
                    <UserInput  placeholder="Deepanshu "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="FirstName"
                    value={values.FirstName}
                    />
                    </NameWithIcons>
                    {errors.FirstName && touched.FirstName ? (
                      <p className="form-error">{errors.FirstName}</p>
                    ) : null}
                    </NameWrapper>

                    <NameWrapper>
                    <NameWithIcons>
                    <UserInput  placeholder="Sarswat"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="LastName"
                    value={values.LastName}
                    />
                    </NameWithIcons>
                    {errors.LastName && touched.LastName ? (
                      <p className="form-error">{errors.LastName}</p>
                    ) : null}
                    </NameWrapper>
                    </UserName>
                 
                 
                    <Wrapper>
                    <InputWithIcons>
                    <UserInput  placeholder="sarswatdeepanshu@gmail.com"  type={"email"}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       name="userEmail"
                       value={values.userEmail}
                    />
                    </InputWithIcons>
                    {errors.userEmail && touched.userEmail ? (
                      <p className="form-error">{errors.userEmail}</p>
                    ) : null}
                    </Wrapper>

                    <Wrapper>
                    <InputWithIcons>
                    <UserInput  placeholder="userPassword" type={"Password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="userPassword"
                        value={values.userPassword}
                    />
                    </InputWithIcons>
                    {errors.userPassword && touched.userPassword ? (
                      <p className="form-error">{errors.userPassword}</p>
                    ) : null}
                    </Wrapper>
              <button type="submit">Create Account</button>
                </form>
            </LoginForm>
        </Loginpage>
     );
}
 
export default Login;

const Loginpage = styled.div`
position:relative;
display: flex;
justify-content: flex-start;
align-items: center;
height:100vh;
background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2)),url("images/Background.jpg");
`

const LoginForm = styled.div`

position: absolute;
    left: 100px;
    height: 650px;
    width: 600px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
    h1{
        font-family: 'Source Sans Pro', sans-serif;
        color:white;
        font-size:2.5rem;
        margin:24px 0;
        margin-left:12px
    }
form{
    font-family: 'Source Sans Pro', sans-serif;
    margin-left:12px;

    button{
        padding:16px;
        font-size:1rem;
        border-radius: 14px;
    }
   
}
p{
    
    color:white
}
    
`;

const InputWithIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color:white;
position:relative;
flex-direction:column;
width :500px;


`;

const UserInput = styled.input`
border: 1px solid rgb(70, 70, 70);
    padding: 12px;
    font-size: 1.2rem;
    outline: 0px;
    border-radius: 3px;
    margin-bottom: 12px;
    background: rgb(9, 7, 7);
    color: rgb(227, 227, 227);
    width: 100%;
`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: flex-start;
margin-bottom:2rem;
padding:0px 12px;
height: 80px;


`

const UserName = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height:90px;
`
const NameWrapper = styled.div`
margin-left: 13px;
    width: 348px;
`

const NameWithIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color:white;
position:relative;
flex-direction:column;
width :300px;

input{
    width:100%
}
`