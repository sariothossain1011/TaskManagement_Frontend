// https://task-management-server-pi-ten.vercel.app/api/v1
import axios from 'axios' ;
import { getToken, setEmail, setOTP, setToken, setUserDetails } from '../Helpers/SessionalHelper';
import { ErrorTost, SuccessTost } from '../Helpers/Validation';
import { SetProfile } from '../Redux/State/ProfileSlice';
import { HideLoder, ShowLoder } from '../Redux/State/SettingsSlice';
import { SetSummary } from '../Redux/State/SummarySlice';
import { SetCanceledTask, SetConpletedTask, SetNewTask, SetProgressTask } from '../Redux/State/TaskSlice';
import store from '../Redux/Store/store';
const API = 'https://task-management-server-pi-ten.vercel.app/api/v1/'


let AxiosHeaders = {headers:{token:getToken()}}

// REGISTRATION REQUEST
export function RegistrationRequest(email,firstName,lastName,mobile,photo,password){
    // store.dispatch(ShowLoder());
    let URL = `${API}registration`;
    let reqBody ={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo,password:password};
    return axios.post(URL,reqBody).then((res)=>{
        // store.dispatch(HideLoder());
        if(res.status===200){
            if(res.data['status'] === "fail"){
                if(res.data['data']['keyPattern']['email'] === 1){
                    ErrorTost(' Email Already Exist !')
                    return false
                }
                else{
                    ErrorTost('Something went wrong !')
                    return false
                }
            }
            else{
                SuccessTost('Registration success')
                return true
            }
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder());
        ErrorTost('Something went wrong !')
        return false
    })
}

// LOGIN REQUEST
export function LoginRequest(email,password){
    // store.dispatch(ShowLoder());
    let URL = `${API}login`;
    let reqBody ={email:email,password:password}
    return axios.post(URL,reqBody).then((res)=>{
        // store.dispatch(HideLoder());
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessTost('Login Success')
            return true
        }
        else{
            ErrorTost("Invalid Email or Password")
            return  false;
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
}

// TASK CREATE REQUEST
export function TaskCreate(title,description){
    // store.dispatch(ShowLoder());
    let URL = `${API}createTask`;
    let reqBody ={title:title,description:description,status:"New"}
    return axios.post(URL,reqBody,AxiosHeaders).then((res)=>{
        // store.dispatch(HideLoder());
        if(res.status===200){
            SuccessTost("Task Create Success")
            return true
        }
        else{
            ErrorTost('Something went wrong !')
            return  false;
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
}

export function TaskListByStatus(Status){
    store.dispatch(ShowLoder());
    let URL = `${API}listTaskByStatus/${Status}`;
    return axios.get(URL,AxiosHeaders).then((res)=>{
        store.dispatch(HideLoder());
        if(res.status===200){
            if(Status==="New"){
                store.dispatch(SetNewTask(res.data['data']))
            }
            if(Status==="Completed"){
                store.dispatch(SetConpletedTask(res.data['data']))
            }
            if(Status==="Progress"){
                store.dispatch(SetProgressTask(res.data['data']))
            }
            if(Status==="Canceled"){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
        }else{
            ErrorTost('Something went wrong !')
            return false
        }
    }).catch((error)=>{
        store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
}

export function SummaryRequest(){
    // store.dispatch(ShowLoder());
    let URL = `${API}taskStatusCount`;
    return axios.get(URL,AxiosHeaders).then((res)=>{
        // store.dispatch(HideLoder());
        if(res.status===200){
            store.dispatch(SetSummary(res.data['data']))
            // alert(JSON.stringify(res.data))
            return true
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
}

export function DeteteRequest(id){
    // store.dispatch(ShowLoder());
    let URL = `${API}deleteTask/${id}`;
    return axios.get(URL,AxiosHeaders).then((res)=>{
        // store.dispatch(HideLoder());
        if(res.status===200){
            SuccessTost("Delete Success");
            return true
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
}
export function UpadateRequest(id,status){
    // store.dispatch(ShowLoder());
    let URL = `${API}updateStatusTask/${id}/${status}`;
    return axios.get(URL,AxiosHeaders).then((res)=>{
        // store.dispatch(HideLoder());
        if(res.status===200){
            SuccessTost("Update Success");
            return true
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
}

export function GetProfileDetailsRequest(){
    // store.dispatch(ShowLoder());
    let URL = `${API}profileDetails`;
    return axios.get(URL,AxiosHeaders).then((Result)=>{
        // store.dispatch(HideLoder());
        if(Result.status===200){
            store.dispatch(SetProfile(Result.data['data'][0]))
            SuccessTost("Update Success");
            return true
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
};

export function ProfileUpdateRequest(email,firstName,lastName,mobile,photo,password){
    // store.dispatch(ShowLoder());
    let URL = `${API}profileUpdate`;
    let reqBody ={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo,password:password}
    let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}
    return axios.post(URL,reqBody,AxiosHeaders).then((Result)=>{
        // store.dispatch(HideLoder());
        if(Result.status===200){
            setUserDetails(UserDetails)
            return true
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
};

// RECOVER PASSWORD STEP 01 SEND OTP
export function RecoverVerifyEmailRequest(email){
    // store.dispatch(ShowLoder());
    debugger;

    let URL = `${API}RecoverVerifyEmail/${email}`;
    debugger;
    
    return axios.get(URL).then((res)=>{
        // store.dispatch(HideLoder());
        // debugger;
        if(res.status===200){
            // debugger;
            if(res.data['status']==="fail"){
                ErrorTost('No User Found !');
                return false;
                // debugger;
            }else{
                setEmail(email);
                SuccessTost("Email Send Success");
                return true;
                // debugger;
            }
        }else{
            ErrorTost('Something went wrong !')
            return false
            // debugger;
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
        // debugger;
    })
};
// RECOVER PASSWORD STEP 02 SEND OTP
export function RecoverVerifyOTPRequest(email,otp){
    // store.dispatch(ShowLoder());
    let URL = `${API}RecoverVerifyOTP/${email}/${otp}`;
    return axios.get(URL).then((res)=>{
        // store.dispatch(HideLoder());
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorTost(res.data['data'])
                return false
            }else{
                setOTP(otp);
                SuccessTost("Code verification successfully")
                return true
            }
            
        }else{
            ErrorTost('Something went wrong !')
            return false
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
};

// RECOVER PASSWORD STEP 03 RESET PASSWORD
export function RecoverResetPassRequest(email,OTP,password){
    // store.dispatch(ShowLoder());
    let URL = `${API}RecoverResetPass`;
    let PostBody = {email:email,OTP:OTP,password:password}
    return axios.post(URL,PostBody).then((Result)=>{
        // store.dispatch(HideLoder());
        if(Result.status===200){
            if(Result.data['status']==="fail"){
                ErrorTost(Result.data['data'])
                return false
            }else{
                setOTP(OTP)
                SuccessTost("New Password Save successfully")
                return true
            }
        }
    }).catch((error)=>{
        // store.dispatch(HideLoder())
        ErrorTost('Something went wrong !')
        return false
    })
};