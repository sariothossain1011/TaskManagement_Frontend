import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
import MasterLayout from '../Conponents/MasterLayout/MasterLayout';
const New = lazy(()=>import('../Conponents/New/New'));
const NewPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LaryLoder/>}>
                    <New/>
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default NewPage;