import React, { Fragment ,Suspense,lazy} from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
import MasterLayout from '../Components/MasterLayout/MasterLayout';
const New = lazy(()=>import('../Components/New/New'));
const NewPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <New/>
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default NewPage;