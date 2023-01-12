import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ValidationHelpers{
    IsEmty(value){
        if(value.length===0){
            return true
        }else{
            return false
        }
    };
    SuccessTost(msg){
        toast.success(msg)

    };
    ErrorTost(msg){
        toast.error(msg)
        
    }
    
    
}

export const {IsEmty,SuccessTost,ErrorTost }= new ValidationHelpers()