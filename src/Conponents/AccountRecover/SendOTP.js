import React, { Fragment, useRef } from 'react'
import { useNavigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { RecoverVerifyEmailRequest } from '../../ApiSevices/ApiSevices';
import { ErrorTost, IsEmail } from '../../Helpers/Validation';

const SendOTP = () => {
    let navigate = useNavigate()
   let emailRef = useRef()

    const VerifyEmail =()=>{
        let email =emailRef.value;
        if(IsEmail(email)){
            ErrorTost("Valid Email Address Required !")
        }else{
            // debugger;
            RecoverVerifyEmailRequest(email).then((Result)=>{
                // debugger;
                if(Result===true){
                    // debugger;
                    navigate('/VerifyOTP')
                }
            })
        }
    }
  return (
    <Fragment>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 center-screen">
                <div className="card w-90  p-4">
                    <div className="card-body">
                        <h4>EMAIL ADDRESS</h4>
                        <br/>
                        <label>Your email address</label>
                        <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                        <br/>
                        <button onClick={VerifyEmail}  className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
  )
}

export default SendOTP