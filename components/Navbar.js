import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import Head from "next/head";
import Image from "next/image";
import IMG from "../images/logo.jpeg";
import style from '../styles/media.module.css';
import { Button } from "@material-ui/core";
import { useEffect } from "react";
const navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(logout());
  };

  const authLinks = (
    <>
      <li className="nav-item">
        <Link href="/dashboard">
          <a
            className={
              router.pathname === "/dashboard" ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </a>
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <>
      {/* <li className="nav-item">
        <Link href="/signup">
          <a
            className={
              router.pathname === "/register" ? "nav-link active" : "nav-link"
            }
          >
            Register
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login">
          <a
            className={
              router.pathname === "/login" ? "nav-link active" : "nav-link"
            }
          >
            Login
          </a>
        </Link>
      </li> */}
    </>
  );
    // useEffect(()=>{
    //     var w = window.innerWidth;
    //     if(w <= 720){
    //         document.getElementById('.remove1').style.display = 'none';
    //         document.getElementById('.remove2').style.display = 'none';
    //     } 
    // },[router.pathname])
 
        

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image src={IMG} width="30px" height="30px" />
              MASHVISOR
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={
                      router.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>

              {isAuthenticated ? authLinks : guestLinks}
              <form
            className="form-inline my-2 my-lg-0"
            style={{ marginLeft: "18rem", marginRight: "1rem" }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="How to..."
              aria-label="Search"
            />
          </form>
              <div
              className="nav-item remove"
              
              style={{
                background: "#D9D9D9",
                width: "1px",
                height: "30px",
                marginTop: "0.38rem",
                margin: "0 1rem 0 17rem",
              }}
            ></div>
            {isAuthenticated ? <><li className="nav-item">
        <a className="nav-link" href="#!" onClick={logoutHandler}>
          Logout
        </a>
      </li></> : <><li className='nav-item'>
                <Link className="nav-link" href="/login">
                  Log in
                </Link>
              </li><li className="nav-item">
                <Button
                  style={{
                    background: "#16227B",
                    color: "#fff",
                    width: "100px",
                    height: "38px",
                    borderRadius: "25px",
                    marginLeft: "1rem",
                  }}
                >
                  <Link href="/signup">Sign up</Link>
                </Button>
              </li></>}
              
              
            </ul>
          </div>
        </div>
      </nav>
      <div
        style={{
          height: "2px",
          width: "100%",
          background: "rgb(198, 221, 243)",
        }}
      ></div>
    </>
  );
};

export default navbar;
