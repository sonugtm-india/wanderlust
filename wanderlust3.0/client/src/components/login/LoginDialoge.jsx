import React, { useContext } from 'react'
import {Dialog, TextField, Typography,Box,styled,Button} from '@mui/material'
 import { useState } from 'react'
 import { signUpAuthentication } from '../../services/api.js'
 import {DataContext} from  '../../contextAPI/DataProvider.js'
 import { loginAuthentication } from '../../services/api.js'

const Component=styled(Box)`
  height:70vh;
  width:90vh;
  display:flex;
  

`
const Image=styled(Box)`

  background:#2874f0 url(https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center no-repeat;
  height:100%;
  width:40%;
  padding:45px 35px;
  & > p, & > h5{
    color:#ffffff;
    font-weight:600;
  }
  
`

const Wrapper=styled(Box)`
 display:flex;
 flex-direction:column;
 padding:25px 35px;
 flex:1;
 & > div, & > p,  & > button{
  margin-top:20px;
  
 }

 
`
const LoginButton = styled(Button)`
  text-tranform:none;
  background:#FB6418;
  color:#fff;
  height:48px;
  border-radius:2px;

`
const RequestOtp = styled(Button)`
  text-tranform:none;
  background:#fff;
  color:#2874f0;
  height:48px;
  border-radius:2px;
  box-shadow: 0 2px 4px 0 rgb(0,0,0/20%)

`
const Text=styled(Typography)`
  color:#878787;
  font-size:14px;

`
const Error=styled(Typography)`
  font-size:10px;
  color:red;
  line-height:0;
  margin-top:10px;
  font-weight:600;

`
const defaultSignupInput={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  mobile:''

}
const defaultLoginInput={
  username:'',
  password:''
}
const LoginDialoge = ({open,setOpen}) => {
  const [account,setAccount]=useState(true)
  const [login,setLogin]  = useState(false);
  const [signupData,setSignupData]=useState(defaultSignupInput);
  const [loginData,setLoginData]=useState(defaultLoginInput)
  const {accountName, setAccountName}=useContext(DataContext)
  const [error,setError]=useState(false)
  const closeDialog=()=>{
    setOpen(false);
    setAccount(true)
    setError(false)
  }
  const toggleAccount=()=>{
         setAccount(false)
      

  }



  // signup input field data
  const signupInputField=(e)=>{
     
     setSignupData({...signupData,[e.target.name]:e.target.value})
     console.log(signupData)
  }
  
  //====signUp Data push to api from=======//
    const signupUser=async()=>{
        let responce =await signUpAuthentication(signupData)

        if(!responce) return ;
        closeDialog();
        setAccountName(signupData.firstname);
       
       
    }


    //login input field data=====//

    const loginInputField=(e)=>{
      setLoginData({...loginData,[e.target.name]:e.target.value})
      console.log(loginData);
    }



    //== calling login api==///
     const loginUser=async()=>{
      let response=await loginAuthentication(loginData)
      console.log(response)
      if (response.status===200){
        closeDialog();
        setLogin(true);
      setAccountName(response.data.data.firstname)
     }else{
        setError(true);
     }
     
    }

  return (
    <Dialog open={open} onClose={closeDialog} PaperProps={{sx:{maxWidth:'unset'}}}>
     <Component>
     <Image>
         <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='loginimage'/>
        { account===true? <><Typography variant="h5">Login</Typography><Typography style={{marginTop:20}}>Get access to your home, Wishlist and Recommendations</Typography>
                          </>
                           :
                 <>
                 <Typography variant="h5">Looks like you're new here!</Typography>
                <Typography style={{marginTop:20}}>Sign up with your mobile number to get started</Typography>
                  </>
         }

      </Image>
      
      { account===true?

       <Wrapper>
         <TextField variant="standard" onChange={(e)=>loginInputField(e)} name="username" label = "Enter username"/>
        {error && <Error> Invalid username or password </Error>}
         <TextField variant='standard' onChange={(e)=>loginInputField(e)} name="password" label="Enter Password"/>
         <Text>By continue, you are agree to Wanderlust's terms of Use and Privacy Policy</Text>
         <LoginButton onClick={loginUser}>Login</LoginButton>
         <Typography style={{textAlign:'center'}}> OR </Typography>
         <RequestOtp> Request OTP</RequestOtp>
         <Text style={{textAlign:'center'}} onClick={()=>toggleAccount()}> New to Wanderlust? Create an account</Text>
       </Wrapper>
         :
         <Wrapper >
          <TextField variant="standard" onChange={(e)=>signupInputField(e)} name="firstname" label = "Enter Firstname"/>
          <TextField variant="standard" onChange={(e)=>signupInputField(e)} name="lastname"  label = "Enter Lastname"/>
          <TextField variant="standard" onChange={(e)=>signupInputField(e)} name="username" label = "Enter Username"/>
         <TextField variant="standard" onChange={(e)=>signupInputField(e)}  name="email"     label = "Enter Email"/>
         <TextField variant='standard' onChange={(e)=>signupInputField(e)}  name="password"  label="Enter Password"/>
         <TextField variant="standard" onChange={(e)=>signupInputField(e)} name="mobile" label = "Mobile number"/>
         <Text>By continue, you are agree to Wanderlust's terms of Use and Privacy Policy</Text>
         <LoginButton onClick={(e)=>signupUser()}>Continue</LoginButton>
       </Wrapper>
      }
     </Component>
      </Dialog>
  )
}

export default LoginDialoge