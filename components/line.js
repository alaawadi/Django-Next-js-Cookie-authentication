// import styles from '././styles/Signup.module.scss'
// import GoogleImg from './google.jpeg'
// import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import ErrorOutlineIcon from '@material-ui/icons'
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Container,
  FormLabel,
  Link
} from "@material-ui/core";
import {InputAdornment, IconButton } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';


// import Header from './components/header';
export default function Login(context) {
  const history = useRouter();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  let [loading, setLoading] = useState(true);   
  const user = useSelector(state => state.auth.user);
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(5).required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      setIsSubmitSuccess(true);
    },
  });

  const [state, setState] = useState("");
  let regExpWeak = /[a-z]/g;
  let cap = /[A-Z]/;
  let num = /[0-9]/;
  let regExpMedium = /\d+/;
  let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

  //   console.log(state)
  useEffect(() => {
    // console.log(store)
    // var password = document.getElementById('password')
    // password.onchange =formik.handleChange
    var pas = document.getElementById("x1");
    var pas2 = document.getElementById("x2");
    var pas3 = document.getElementById("x3");
    var pas4 = document.getElementById("x4");
    var pas5 = document.getElementById("x5");

    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");

    // setState(currentvalue=>!currentvalue)
    if (
      state.match(" ") ||
      (state.length <= 3 &&
        (state.match(regExpWeak) ||
          state.match(regExpMedium) ||
          state.match(regExpStrong) ||
          state.match(cap) ||
          state.match(num)))
    ) {
      pas.style.background = "red";
      pas2.style.background = "#F0F2F5";
      pas3.style.background = "#F0F2F5";
      pas4.style.background = "#F0F2F5";
      pas5.style.background = "#F0F2F5";
      error1.innerHTML = "error1";
      error2.innerHTML = "error1";
    } else if (
      state.match(" ") ||
      (state.length >= 3 &&
        state.length < 6 &&
        (state.match(regExpWeak) ||
          state.match(regExpMedium) ||
          state.match(regExpStrong) ||
          state.match(cap) ||
          state.match(num)))
    ) {
      pas.style.background = "red";
      pas2.style.background = "red";
      pas3.style.background = "#F0F2F5";
      pas4.style.background = "#F0F2F5";
      pas5.style.background = "#F0F2F5";
      error1.innerHTML = "error2";
      error2.innerHTML = "error2";
    } else if (state == "") {
      pas.style.background = "#F0F2F5";
      pas2.style.background = "#F0F2F5";
      pas3.style.background = "#F0F2F5";
      pas4.style.background = "#F0F2F5";
      pas5.style.background = "#F0F2F5";
      error1.innerHTML = "";
      error2.innerHTML = "";
    } else if (
      state.length >= 6 &&
      state.length < 8 &&
      //   state.length <= 8 &&
      ((state.match(regExpWeak) && state.match(regExpMedium)) ||
        (state.match(regExpMedium) && state.match(regExpStrong)) ||
        (state.match(regExpWeak) && state.match(regExpStrong)))
    ) {
      pas.style.background = "#FAAD14";
      pas2.style.background = "#FAAD14";
      pas3.style.background = "#FAAD14";
      pas4.style.background = "#F0F2F5";
      pas5.style.background = "#F0F2F5";
      error1.innerHTML = "mediam";
      error2.innerHTML = "mediam";
    } else if (
      state.length == 8 &&
      //   state.match(regExpWeak) &&
      //   state.match(regExpMedium) &&
      state.match(regExpStrong) &&
      //   state.match(cap) &&
      state.match(num)
      //   state.match(regExpMedium) &&
    ) {
      pas.style.background = "green";
      pas2.style.background = "green";
      pas3.style.background = "green";
      pas4.style.background = "green";
      pas5.style.background = "#F0F2F5";
      error1.innerHTML = "strong";
      error2.innerHTML = "strong";
    } else if (
      state.length > 8 &&
      //   state.match(regExpWeak) &&
      //   state.match(regExpMedium) &&
      state.match(regExpStrong) &&
      state.match(cap) &&
      state.match(num)
      //   state.match(regExpMedium) &&
    ) {
      pas.style.background = "green";
      pas2.style.background = "green";
      pas3.style.background = "green";
      pas4.style.background = "green";
      pas5.style.background = "green";
      error1.innerHTML = "strng1";
      error2.innerHTML = "strong1";
    }
  }, [state]);



  let signupUser = async (e )=> {
    e.preventDefault()
    
    let response = await fetch('http://127.0.0.1:8000/api/account/signupapi/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'username':e.target.email.value,'email':e.target.email.value, 'password':e.target.password.value})
    },[setLoading(false)])
    // let data2 = await response2.json()

    if(response.status === 400){
        alert('user name or Email or Password is not corrected!')
        
    }else{
        alert('check you email to activate your account to login!')
        history.push('/')
    }
}



  return (
    <div>
      <div>
      <form onSubmit={signupUser}>
          <div style={{ paddingLeft: "30px", marginTop: "15px" }}>
            <label>Email</label>
            <br></br>

            <TextField
              style={{
                padding: "8px",
                width: "320px",
                height: "40px",
                background: "#F0F2F5",
                border: "0px",
                borderRadius: "8px",
              }}
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name='email'
              placeholder="email@company.com"
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div style={{marginLeft:'2.1rem'}} className="error_msg">{formik.errors.email}</div>
            
          ) : null}

          <div style={{ paddingLeft: "30px", marginTop: "15px" }}>
            <label>Password</label>
            <br></br>
            <TextField
              onChange={(e) => {
                setState(e.target.value);
                formik.handleChange(e)
              }}
              className="textField"
              id="password"
              style={{
                padding: "8px",
                width: "320px",
                height: "40px",
                background: "#F0F2F5",
                border: "0px",
                borderRadius: "8px",
              }}
              name='password'
              type="Password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder='at least 8 characters'
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div style={{marginLeft:'2.1rem'}} className="error_msg">{formik.errors.password}</div>
          ) : null}
        

        <Container align="center">
          <div style={{ display: "flex" }}>
            <div
              id="x1"
              style={{
                height: "5px",
                width: "60.8px",
                background: "#F0F2F5",
                marginLeft: "4px",
                marginTop: "10px",
                borderRadius: "999px",
              }}
            ></div>
            <div
              id="x2"
              style={{
                height: "5px",
                width: "60.8px",
                background: "#F0F2F5",
                marginLeft: "4px",
                marginTop: "10px",
                borderRadius: "999px",
              }}
            ></div>
            <div
              id="x3"
              style={{
                height: "5px",
                width: "60.8px",
                background: "#F0F2F5",
                marginLeft: "4px",
                marginTop: "10px",
                borderRadius: "999px",
              }}
            ></div>
            <div
              id="x4"
              style={{
                height: "5px",
                width: "60.8px",
                background: "#F0F2F5",
                marginLeft: "4px",
                marginTop: "10px",
                borderRadius: "999px",
              }}
            ></div>
            <div
              id="x5"
              style={{
                height: "5px",
                width: "60.8px",
                background: "#F0F2F5",
                marginLeft: "4px",
                marginTop: "10px",
                borderRadius: "999px",
              }}
            ></div>
          </div>
        </Container>

        <Container align="center">
          <div style={{ display: "flex" }}>
            <div id="error1"></div>
            <div id="error2"></div>
          </div>
        </Container>


        <Container align="center">
              <p
                style={{
                  color: "#778699",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                By signing up, you are agreeing to our{" "}
                <span style={{ color: "#16227B" }}>Terms & Conditions</span> and{" "}
                <span style={{ color: "#16227B" }}>Privacy Policy.</span>
              </p>
            </Container>

            <Container align="center">
              <Button
              type='submit'
                style={{
                  background: "#16227B",
                  color: "#fff",
                  width: "320px",
                  height: "38px",
                  borderRadius: "25px",
                }}
              >
                Sign up
              </Button>
              <p
                style={{
                  color: "#778699",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
            
                Already have an account?{" "}
                <span style={{ color: "#16227B" }}><Link href='/login'>Log in</Link></span>
              </p>
            </Container>
            </form>

      </div>
    </div>
  );
}
