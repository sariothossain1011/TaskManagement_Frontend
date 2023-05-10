import React, { Fragment ,Suspense,lazy} from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';

const Notfound = lazy(()=>import('../Components/Notfound/Notfound'));
const Page404 = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
            <Notfound/>
            </Suspense>
        </Fragment>
    );
};

export default Page404;