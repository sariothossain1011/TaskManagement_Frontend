import React, { Fragment,Suspense,lazy } from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
import MasterLayout from '../Conponents/MasterLayout/MasterLayout';

const Canceled = lazy(()=>import('../Conponents/Canceled/Canceled'));
const CanceledPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LaryLoder/>}>
                    <Canceled/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CanceledPage;