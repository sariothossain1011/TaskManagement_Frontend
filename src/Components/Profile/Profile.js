import React, { Fragment, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { GetProfileDetailsRequest, ProfileUpdateRequest } from '../../ApiServices/ApiServices';
import { ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile, IsPassword, SuccessToast } from '../../Helpers/Validation';
const Profile = () => {
    let navigate = useNavigate()
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef,userImgRef,userImgView=useRef();

    const UpdateMyProfile  =()=>{
        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        let photo = userImgView.src;
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
            ProfileUpdateRequest(email,firstName,lastName,mobile,photo,password).then((res)=>{
                if(res===true){
                    // SuccessToast("Profile Update Success")
                    navigate('/')
                }
            })

        }
    }
    

    useEffect(()=>{
        GetProfileDetailsRequest();
    },[]);

    const ProfileDetails = useSelector((state)=> state.profile.value);

    const PreviewImage=()=>{
        let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
            userImgView.src = base64Img;
        });
    };

    return (
        <Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <img  ref={(input)=>userImgView=input} className="icon-nav-img-lg" src={ProfileDetails['photo']} alt=""/>
                                    <hr />
                                    <div className="row">
                                        <div className="col-4 p-2">
                                            <label >Profile Picture</label>
                                            <input ref={(input)=>userImgRef=input} onChange={PreviewImage}  type="file" placeholder='User image' className='form-control animated fadeInUp' />
                                        </div>
                                        <div className="col-4 p-2">
                                            <label >Email Address</label>
                                            <input ref={(input)=>emailRef=input} key={Date.now()} readOnly={true} defaultValue={ProfileDetails['email']} type="email" placeholder='User Email' className='form-control animated fadeInUp' />
                                        </div>
                                        <div className="col-4 p-2">
                                            <label >First Name</label>
                                            <input ref={(input)=>firstNameRef=input} key={Date.now()} defaultValue={ProfileDetails['firstName']} type="text" placeholder='first Name' className='form-control animated fadeInUp' />
                                        </div>
                                        <div className="col-4 p-2">
                                            <label >Last Name</label>
                                            <input ref={(input)=>lastNameRef=input} key={Date.now()} defaultValue={ProfileDetails['lastName']} type="text" placeholder='last Name' className='form-control animated fadeInUp' />
                                        </div>
                                        <div className="col-4 p-2">
                                            <label >Mobile Number</label>
                                            <input ref={(input)=>mobileRef=input} key={Date.now()} defaultValue={ProfileDetails['mobile']} type="number" placeholder='Mobile Number' className='form-control animated fadeInUp' />
                                        </div>
                                        <div className="col-4 p-2">
                                            <label >Password</label>
                                            <input ref={(input)=>passwordRef=input} key={Date.now()} defaultValue={ProfileDetails['password']} type="password" placeholder='Password' className='form-control animated fadeInUp' />
                                        </div>
                                        <div className="col-4 p-2">
                                            <button onClick={UpdateMyProfile }  className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
};

export default Profile;