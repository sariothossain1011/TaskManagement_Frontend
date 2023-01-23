import React, { Fragment ,Suspense,lazy} from 'react';
import LaryLoder from '../Conponents/MasterLayout/LaryLoder';
import MasterLayout from '../Conponents/MasterLayout/MasterLayout';

const Profile = lazy(()=>import('../Conponents/Profile/Profile'));
const ProfilePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LaryLoder/>}>
                    <Profile/>
                </Suspense>
            </MasterLayout>
        </Fragment> 
    );
};

export default ProfilePage;