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
  Link,
} from "@material-ui/core";
// import Header from "../components/header";
import Line from "../components/line";
import { useEffect, useState } from "react";
import Layout from "../hocs/Layout";
import cookie from 'cookie';



export default function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    

  return (
      <Layout
            title='httpOnly Auth | Login'
            content='Resiger page for this auth tutorial on httpOnly cookies'
        >
        {/* <Header /> */}
        <Card
          style={{
            maxWidth: "416px",
            height: "500px",
            padding: "20px 5px",
            margin: "0 auto",
            marginTop: "5rem",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <Container align="center">
              <h5 style={{ color: "#16227B" }}>Smart investing starts here</h5>
              <h6 style={{ color: "#16227B" }}>Start your free 7-day trial</h6>
            </Container>

            <Container align="center">
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
                <div style={{ marginLeft: "10px" }}>
                  <h6>Sign up with Google</h6>
                </div>
              </div>
            </Container>

            <Line />

            
          </CardContent>
        </Card>
      </Layout>
  );
}
