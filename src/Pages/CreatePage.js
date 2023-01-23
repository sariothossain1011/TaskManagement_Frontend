import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
import MasterLayout from '../Conponents/MasterLayout/MasterLayout';

const Create = lazy(()=>import('../Conponents/Create/Create'));
const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LaryLoder/>}>
                    <Create/>
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default CreatePage;