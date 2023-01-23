import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';

const Forgetpass = lazy(()=>import('../Conponents/Forgetpass/Forgetpass'));
const ForgetpassPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LaryLoder/>}>
                <Forgetpass/>
            </Suspense>
        </Fragment>
    );
};

export default ForgetpassPage;