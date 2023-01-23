import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
import MasterLayout from '../Conponents/MasterLayout/MasterLayout';

const Completed = lazy(()=>import('../Conponents/Completed/Completed'));
const CompletedPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LaryLoder/>}>
                    <Completed  />
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default CompletedPage;