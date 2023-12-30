import axios from "axios";
import {
  getToken,
  setEmail,
  setOTP,
  setToken,
  setUserDetails,
} from "../Helpers/SessionalHelper";
import { SetProfile } from "../Redux/State/ProfileSlice";
import { HideLoader, ShowLoader } from "../Redux/State/SettingsSlice";
import { SetSummary } from "../Redux/State/SummarySlice";
import {
  SetCanceledTask,
  SetCompletedTask,
  SetNewTask,
  SetProgressTask,
} from "../Redux/State/TaskSlice";
import store from "../Redux/Store/Store";
import { ErrorToast, SuccessToast } from "../Helpers/Validation";
const API = "https://task-management-server-dusky.vercel.app/api/v1/";
// const API = "http://localhost:8080/api/v1/";
let AxiosHeaders = { headers: { token: getToken() } };




// REGISTRATION REQUEST
export function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  photo,
  password
) {
  store.dispatch(ShowLoader());
  let URL = `${API}registration`;
  let reqBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    photo: photo,
    password: password,
  };
  return axios
    .post(URL, reqBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          if (res.data["data"]["keyPattern"]["email"] === 1) {
            ErrorToast(" Email Already Exist !");
            return false;
          } else {
            ErrorToast("Something went wrong !");
            return false;
          }
        } else {
          SuccessToast("Registration success");
          return true;
        }
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

// LOGIN REQUEST
export function LoginRequest(email, password) {
  store.dispatch(ShowLoader());
  let URL = `${API}login`;
  let reqBody = { email: email, password: password };
  return axios
    .post(URL, reqBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"]);
        SuccessToast("Login Success");
        return true;
      } else {
        ErrorToast("Invalid Email or Password");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

// TASK CREATE REQUEST
export function TaskCreate(title, description) {
  store.dispatch(ShowLoader());
  let URL = `${API}createTask`;
  let reqBody = { title: title, description: description, status: "New" };
  return axios
    .post(URL, reqBody, AxiosHeaders)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Task Create Success");
        return true;
      } else {
        ErrorToast("Something went wrong !");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

export function TaskListByStatus(Status) {
  store.dispatch(ShowLoader());
  let URL = `${API}listTaskByStatus/${Status}`;
  return axios
    .get(URL, AxiosHeaders)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (Status === "New") {
          store.dispatch(SetNewTask(res.data["data"]));
        }
        if (Status === "Completed") {
          store.dispatch(SetCompletedTask(res.data["data"]));
        }
        if (Status === "Progress") {
          store.dispatch(SetProgressTask(res.data["data"]));
        }
        if (Status === "Canceled") {
          store.dispatch(SetCanceledTask(res.data["data"]));
        }
      } else {
        ErrorToast("Something went wrong !");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

export function SummaryRequest() {
  store.dispatch(ShowLoader());
  let URL = `${API}taskStatusCount`;
  return axios
    .get(URL, AxiosHeaders)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        store.dispatch(SetSummary(res.data["data"]));
        return true;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

export function DeleteRequest(id) {
  store.dispatch(ShowLoader());
  let URL = `${API}deleteTask/${id}`;
  return axios
    .delete(URL, AxiosHeaders)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Delete Success");
        return true;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}
export function UpdateRequest(id, status) {
  store.dispatch(ShowLoader());
  let URL = `${API}updateStatusTask/${id}/${status}`;
  return axios
    .get(URL, AxiosHeaders)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Update Success");
        return true;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

export function GetProfileDetailsRequest() {
  store.dispatch(ShowLoader());
  let URL = `${API}profileDetails`;
  return axios
    .get(URL, AxiosHeaders)
    .then((Result) => {
      store.dispatch(HideLoader());
      if (Result.status === 200) {
        store.dispatch(SetProfile(Result.data["data"][0]));
        // SuccessToast("Update Success");
        return true;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

export function ProfileUpdateRequest(
  email,
  firstName,
  lastName,
  mobile,
  photo,
  password
) {
  store.dispatch(ShowLoader());
  let URL = `${API}profileUpdate`;
  let reqBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    photo: photo,
    password: password,
  };
  let UserDetails = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    photo: photo,
  };
  return axios
    .post(URL, reqBody, AxiosHeaders)
    .then((Result) => {
      store.dispatch(HideLoader());
      if (Result.status === 200) {
        setUserDetails(UserDetails);
        return true;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

// RECOVER PASSWORD STEP 01 SEND OTP
export async function RecoverVerifyEmailRequest(email) {
  try {
    store.dispatch(ShowLoader());
    let URL = `${API}RecoverVerifyEmail/${email}`;
    let res = await axios.get(URL);
    store.dispatch(HideLoader());
    if (res.status === 200) {
      if (res.data["status"] === "fail") {
        ErrorToast("No user found");
        return false;
      } else {
        setEmail(email);
        SuccessToast("Verify Email Success");
        return true;
      }
    } else {
      ErrorToast("Something Went Wrong");
      return false;
    }
  } catch (error) {
    ErrorToast("Something Went Wrong");
    store.dispatch(HideLoader());
    return false;
  }
}

// RECOVER PASSWORD STEP 02 SEND OTP
export function RecoverVerifyOTPRequest(email, otp) {
  store.dispatch(ShowLoader());
  let URL = `${API}RecoverVerifyOTP/${email}/${otp}`;
  return axios
    .get(URL)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "fail") {
          ErrorToast(res.data["data"]);
          return false;
        } else {
          setOTP(otp);
          SuccessToast("Code verification successfully");
          return true;
        }
      } else {
        ErrorToast("Something went wrong !");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}

// RECOVER PASSWORD STEP 03 RESET PASSWORD
export function RecoverResetPassRequest(email, otp, password) {
  store.dispatch(ShowLoader());
  let URL = `${API}RecoverResetPass`;
  let PostBody = { email: email, otp: otp, password: password };
  return axios
    .post(URL, PostBody)
    .then((Result) => {
      store.dispatch(HideLoader());
      if (Result.status === 200) {
        if (Result.data["status"] === "fail") {
          ErrorToast(Result.data["data"]);
          return false;
        } else {
          setOTP(otp);
          SuccessToast("New Password Save successfully");
          return true;
        }
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something went wrong !");
      return false;
    });
}
