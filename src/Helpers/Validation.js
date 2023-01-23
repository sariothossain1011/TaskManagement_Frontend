
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
let PasswordRegx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

class ValidationHelpers{
    IsEmty(value){
        if(value.length===0){
            return true
        }else{
            return false
        }
    };
    IsMobile(value){
        return !MobileRegx.test(value)
    };
    IsEmail(value){
        return !EmailRegx.test(value)
    };
    IsPassword(value){
        return !PasswordRegx.test(value)
    };
    SuccessTost(msg){
        toast.success(msg,{ position: "bottom-center" })

    };
    ErrorTost(msg){
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

export const {IsEmty,SuccessTost,ErrorTost ,IsEmail,IsMobile,IsPassword,getBase64}= new ValidationHelpers()