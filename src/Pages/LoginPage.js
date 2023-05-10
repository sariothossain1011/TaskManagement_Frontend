import React, { Fragment ,Suspense,lazy} from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
const Login = lazy(()=>import('../Components/Login/Login'));
const LoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </Fragment>
    );
};

export default LoginPage;