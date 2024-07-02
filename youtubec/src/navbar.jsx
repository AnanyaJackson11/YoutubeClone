  import React, {useEffect} from "react";
  import './navbar.css';
  import logo from './logo.ico';
  import SearchBar from './searchbar'; // Adjust the path as necessary
  import { RiVideoAddLine } from 'react-icons/ri';
  import { IoMdNotificationsOutline } from 'react-icons/io';
  import { BiUserCircle } from 'react-icons/bi';
  import { GoogleLogin } from 'react-google-login';
  import {gapi} from "gapi-script"
  import { useDispatch, useSelector } from "react-redux";
  import {login} from './actions/auth';
import Auth from "./Auth";


  const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

  function Navbar() {
    //const Currentuser = null;
    const Currentuser = {
        result: {
        email: "xyz@mail.com",
        joinedOn: "2222-07-15T09:57:23.489Z",
      },
    };
    //const Currentuser = useSelector(state=>state.CurrentUserReducer)
    console.log(Currentuser)

    useEffect(()=>{
      function start(){
          gapi.client.init({
              clientId: "1029554145654-6ospcc11vnuj1a75970encu17ak5859g.apps.googleusercontent.com",
              scope: "email"
          })
      }
      gapi.load("client:auth2", start);
    },
    []);
    
    const dispatch = useDispatch();

    const onSuccess = (response) => {
      const Email= response?.profileObj.email;
      console.log(Email);
      dispatch(login({email:Email}))

    };

    const onFailure = (response) => {

      console.log('Login Failed:', response);
    };

    return (

      <>

      <div className='container_navbar'>
        <div className="burger">
          <div className="burgeR">
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="logo_div">
            <img src={logo} alt="" />
            <p className="logo_title">YouTube</p>
          </div>
        </div>

        <SearchBar />
        <RiVideoAddLine size={22} className={"vid_bell_nav"} />
        <div className="apps_box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline className={"vid_bell_nav"} />
        <div className="auth_cont_nav">
          {Currentuser ? (
            <>
              <div className="Channel_logo">
                <p className="fstchar">
                  {Currentuser?.result.name ? (
                    <>
                      {Currentuser?.result.name.charAt(0).toUpperCase()}
                    </>
                  ) : (
                    <>
                      {Currentuser?.result.email.charAt(0).toUpperCase()}
                    </>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLogin
                clientId="1029554145654-6ospcc11vnuj1a75970encu17ak5859g.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                //cookiePolicy={'single_host_origin'}
              
              render={(renderProps)=>(
              <p onClick={renderProps.onClick} className="auth_btn">
                <BiUserCircle  size={22} />
                <b>Sign In</b>
              </p>
            )}
            />
            </>
          )}
        </div>
      </div>
      {
        <Auth
        User={Currentuser}
        />
      }
      </>
    );
  }

  export default Navbar;
