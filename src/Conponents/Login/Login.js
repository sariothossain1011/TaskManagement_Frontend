import React,{Fragment, useRef} from 'react';
import {Link} from "react-router-dom";
import { LoginRequest } from '../../ApiSevices/ApiSevices';
import { ErrorTost, IsEmail, IsPassword } from '../../Helpers/Validation';
const Login = () => {
    let emailRef ,passwordRef = useRef();

    const SubmitLogin =()=>{
        let email = emailRef.value ;
        let password = passwordRef.value;
        if(IsEmail(email)){
            ErrorTost("Valid Email Address Required !")
        }
        else if(IsPassword(password)){
            ErrorTost('First Name Required !')
        }
        else{
            LoginRequest(email,password).then((res)=>{
                if(res===true){
                    window.location.href='/'
                }
            })
        }
    }
    return (
        <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90 p-4">
                        <div className="card-body">
                            <h4>SIGN IN</h4>
                            <br />
                            <input ref={(input)=>emailRef=input}  type="email" className="form-control animated fadeInUp" placeholder='Email'/>
                            <br />
                            <input ref={(input)=>passwordRef=input}  type="password" className="form-control animated fadeInUp" placeholder='Password'/>
                            <br />
                            <button onClick={SubmitLogin} type='submit' className='btn w-100 animated fadeInUp float-end btn-primary'>NEXT</button>
                            <hr />
                            <div className="text-center w-100">
                                <span>
                                    <Link className="text-center animated fadeInUp" to='/registration'>Sing Up</Link>
                                    {/* <span className="ms-1"> | </span> */}
                                    <br />
                                    <Link className="text-center animated fadeInUp" to='/sendOtp'>Forget Password</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    );
};

export default Login;