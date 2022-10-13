import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, reset_register_success } from '../actions/auth';
import Layout from '../hocs/Layout';
import Loader from 'react-loader-spinner';
import styles from "../styles/Signup.module.scss";
import GoogleImg from "../images/google.jpeg";
import Image from "next/image";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Container,
  FormLabel,
} from "@material-ui/core";
import Link from 'next/link';
// import AuthContext from '../context/AuthContext'
    
const LoginPage = () => {
    // let {loginUser} = useContext(AuthContext)
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const {
        username,
        password,
    } = formData;

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(reset_register_success());
    }, [dispatch]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(login(username, password));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard');

    return (
        <Layout
            title='httpOnly Auth | Login'
            content='Resiger page for this auth tutorial on httpOnly cookies'
        >

        <Card
          style={{
            maxWidth: "416px",
            height: "500px",
            padding: "20px 5px",
            margin: "0 auto",
            marginTop: "3rem",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <Container align="center">
              <h5 style={{ color: "#16227B" }}>Welcome Back!</h5>
            </Container>

            <Container align="center" style={{ marginTop: "2rem" }}>
              <div
                classname={styles.google}
                style={{
                  display: "flex",
                  width: "320px",
                  height: "38px",
                  borderRadius: "42px",
                  background: "#F0F2F5",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image width="25px" height="25px" src={GoogleImg} />
                </div>
                <div style={{ marginLeft: "10px", marginTop: "0.3rem" }}>
                  <h6>Sign up with Google</h6>
                </div>
              </div>
            </Container>


<div style={{marginLeft:'1.5rem'}}>

            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label className='form-label mt-3' htmlFor='username'>
                        <strong>Username*</strong>
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name='username'
                        placeholder='Username*'
                        onChange={onChange}
                        value={username}
                        required
                        style={{
                            padding: "8px",
                            width: "320px",
                            height: "40px",
                            background: "#F0F2F5",
                            border: "0px",
                            borderRadius: "8px",
                          }}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label mt-3' htmlFor='password'>
                        <strong>Password*</strong>
                    </label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        placeholder='Password*'
                        onChange={onChange}
                        value={password}
                        minLength='8'
                        required
                        style={{
                            padding: "8px",
                            width: "320px",
                            height: "40px",
                            background: "#F0F2F5",
                            border: "0px",
                            borderRadius: "8px",
                          }}
                    />
                    <div style={{ display: "flex" }}>
                <div
                  style={{
                    marginLeft: "-0.05rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input style={{ marginRight: "0.2rem" }} type="checkbox" />
                  <p style={{ paddingTop: "1rem" }}>Remember me</p>
                </div>
                <div style={{ marginLeft: "5.5rem", fontSize: "14px" }}>
                  <Link href="/signup">
                    <p style={{ color: "#16227B", paddingTop: "1rem" }}>
                      Forgot password?
                    </p>
                  </Link>
                </div>
              </div>
                </div>
                
                        <Container align="center" style={{ marginTop: "0.6rem",marginLeft: "-1.6rem" }}>
                <Button
                type="submit"
                  style={{
                    background: "#16227B",
                    color: "#fff",
                    width: "320px",
                    height: "38px",
                    borderRadius: "25px",
                  }}
                >
                  Log in
                </Button></Container>
                  

<Container align="center" style={{ marginTop: "0.6rem" }}>

                <p
                  style={{
                    color: "#778699",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                >
                  Don’t have an account yet?{" "}
                  <span style={{ color: "#16227B" }}>
                    <Link href="/signup">Sign Up</Link>
                  </span>
                </p>
              </Container>
            </form>


            </div>
            </CardContent>
        </Card>
        </Layout>
    );
};

export default LoginPage;
