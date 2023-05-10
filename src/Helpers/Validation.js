
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let EmailRegex = /\S+@\S+\.\S+/;
let MobileRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
let PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

class ValidationHelpers{
    IsEmpty(value){
        if(value.length===0){
            return true
        }else{
            return false
        }
    };
    IsMobile(value){
        return !MobileRegex.test(value)
    };
    IsEmail(value){
        return !EmailRegex.test(value)
    };
    IsPassword(value){
        return !PasswordRegex.test(value)
    };
    SuccessToast(msg){
        toast.success(msg,{ position: "bottom-center" })

    };
    ErrorToast(msg){
        toast.error(msg,{ position: "bottom-center" })
        
    };
    getBase64(file) {
        return new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =()=>resolve(reader.result);
        reader.onerror = (error)=>reject(error)
        })
      }
    
    
}

export const {IsEmpty,SuccessToast,ErrorToast ,IsEmail,IsMobile,IsPassword,getBase64}= new ValidationHelpers()