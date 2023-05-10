import React, { Fragment ,Suspense,lazy} from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
import MasterLayout from '../Components/MasterLayout/MasterLayout';

const Create = lazy(()=>import('../Components/Create/Create'));
const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Create/>
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default CreatePage;