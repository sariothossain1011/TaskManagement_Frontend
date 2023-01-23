import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
import MasterLayout from '../Conponents/MasterLayout/MasterLayout';

const Dashboard = lazy(()=>import('../Conponents/Dashboard/Dashboard'));
const DashboardPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LaryLoder/>}>
                    <Dashboard/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default DashboardPage;