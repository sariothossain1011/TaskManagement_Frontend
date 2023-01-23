import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';

const Notfound = lazy(()=>import('../Conponents/Notfound/Notfound'));
const Page404 = () => {
    return (
        <Fragment>
            <Suspense fallback={<LaryLoder/>}>
            <Notfound/>
            </Suspense>
        </Fragment>
    );
};

export default Page404;