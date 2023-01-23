import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
const Login = lazy(()=>import('../Conponents/Login/Login'));
const LoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LaryLoder/>}>
                <Login/>
            </Suspense>
        </Fragment>
    );
};

export default LoginPage;