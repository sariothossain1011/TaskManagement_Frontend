import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
import MasterLayout from '../Conponents/MasterLayout/MasterLayout';

const Progress = lazy(()=>import('../Conponents/Progress/Progress'));
const ProgressPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LaryLoder/>}>
                <Progress/>
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default ProgressPage;