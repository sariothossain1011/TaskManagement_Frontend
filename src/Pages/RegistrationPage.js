import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';

const Registration = lazy(()=>import('../Conponents/Registration/Registration'));
const RegistrationPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LaryLoder/>}>
                <Registration/>
            </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;