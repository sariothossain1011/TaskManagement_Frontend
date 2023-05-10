import React, { Fragment ,Suspense,lazy} from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
import MasterLayout from '../Components/MasterLayout/MasterLayout';

const Completed = lazy(()=>import('../Components/Completed/Completed'));
const CompletedPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Completed  />
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default CompletedPage;