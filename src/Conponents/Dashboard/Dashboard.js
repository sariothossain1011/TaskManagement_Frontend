import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { SummaryRequest } from '../../ApiSevices/ApiSevices';



const Dashboard = () => {

    useEffect(()=>{
        SummaryRequest();
    },[])
    const DeshboardList = useSelector((state)=> state.summary.value)
    return (
        <Fragment>
        <div className="container">
            <div className="row">
            {
                DeshboardList.map((item,i)=>{
                    return (
                        <div key={i.toString()} className="col-md-12 col-lg-3 col-sm-6 col-md-3 p-2">
                           <div className="card h-100">
                               <div className="card-body">
                                   <h5 className="animated fadeInUp">Total {item._id}</h5>
                                   <h5 className="text-secondary animated fadeInUp">{item.sum}</h5>
                               </div>
                           </div>
                       </div>
                    )
                })
            }
            </div>
        </div>

        </Fragment>
    );
};

export default Dashboard;