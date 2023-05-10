import React, { Fragment ,Suspense,lazy} from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
import MasterLayout from '../Components/MasterLayout/MasterLayout';

const Progress = lazy(()=>import('../Components/Progress/Progress'));
const ProgressPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                <Progress/>
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default ProgressPage;