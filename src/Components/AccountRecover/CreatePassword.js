import React, { Fragment, useRef } from 'react'
import { RecoverResetPassRequest } from '../../ApiServices/ApiServices';
import { ErrorToast, IsPassword, SuccessToast } from '../../Helpers/Validation';
import { useNavigate} from "react-router-dom";
import { getEmail, getOTP } from '../../Helpers/SessionalHelper';

const CreatePassword = () => {
  let navigate = useNavigate()
    let NewPasswordRef,ConfirmPasswordRef =useRef();
    
  const ResetPass =()=>{
    let newPassword =NewPasswordRef.value;
    let confirmPassword =ConfirmPasswordRef.value;

    if(IsPassword(newPassword)){
      ErrorToast("New Password Must ne Strong")
    }else if(IsPassword(confirmPassword)){
      ErrorToast("New Password Must ne Strong")
    }else if(newPassword!==confirmPassword){
      ErrorToast("Password doesn't match")
    }else{
      RecoverResetPassRequest(getEmail(),getOTP(),newPassword).then((res)=>{
        if(res===true){
          navigate('/Login')
        }
      })

    }

  }
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-3">
              <div className="card-body">
                <h4>SET NEW PASSWORD</h4>
                <br />
                <label>Your Email Address</label>
                <input type="email" defaultValue={getEmail()} placeholder="User Email" className="form-control animated fadeInUp"/>
                <br />
                <label>New Password</label>
                <input ref={(input)=>NewPasswordRef=input} type="password" placeholder="new passowrd" className="form-control animated fadeInUp"/>
                <br />
                <label>Confirm  Password</label>
                <input ref={(input)=>ConfirmPasswordRef=input} type="password" placeholder="confirm password" className="form-control animated fadeInUp"/>
                <br />
                <button onClick={ResetPass} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreatePassword