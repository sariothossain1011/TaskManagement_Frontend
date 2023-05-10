import React, { Fragment, useRef } from 'react';
import { useNavigate} from "react-router-dom";
import { RegistrationRequest } from '../../ApiServices/ApiServices';
import { ErrorToast, IsEmail, IsEmpty, IsMobile, IsPassword, SuccessToast } from '../../Helpers/Validation';

const Registration = () => {
    let navigate = useNavigate()
    let emailRef ,firstNameRef,lastNameRef,mobileRef ,passwordRef= useRef();

    const SaveData =()=>{
        let email = emailRef.value ;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value ;
        let password = passwordRef.value;
        let photo = 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png';

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(firstName)){
            ErrorToast('First Name Required !')
        }
        else if(IsEmpty(lastName)){
            ErrorToast('Last Name Required !')
        }
        else if(IsMobile(mobile)){
            ErrorToast('Mobile Number Required !')
        }
        else if(IsPassword(password)){
            ErrorToast('Password Must be Strong & Required !')
        }
        else{
            RegistrationRequest(email,firstName,lastName,mobile,photo,password).then((res)=>{
                if(res===true){
                    SuccessToast("Registration Success")
                    navigate('/login')
                }
            })

        }
        
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card animated fadeIn w-100 p-3">
                            <div className="card-body">
                                <h4 className='text-center'>Sign Up</h4>
                                <hr />
                                <input ref={(input)=>emailRef=input} type="email" className='form-control animated fadeInUp' placeholder='email' />
                                <br />
                                <input ref={(input)=>firstNameRef=input} type="text" className='form-control animated fadeInUp' placeholder='first name'/>
                                <br />
                                <input ref={(input)=>lastNameRef=input} type="text" className='form-control animated fadeInUp' placeholder='Last name'/>
                                <br />
                                <input ref={(input)=>mobileRef=input} type="mobile" className='form-control animated fadeInUp' placeholder='mobile number'/>
                                <br />
                                <input ref={(input)=>passwordRef=input} type="password" className='form-control animated fadeInUp' placeholder='password'/>
                                <br />
                                <button onClick={SaveData} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Registration;