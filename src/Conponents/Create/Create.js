import React,{Fragment, useRef} from 'react';
import { ToastContainer } from 'react-toastify';
import {Container, Row} from "react-bootstrap";
import { useNavigate } from 'react-router';
import { TaskCreate } from '../../ApiSevices/ApiSevices';
import { ErrorTost, IsEmty, SuccessTost } from '../../Helpers/Validation';
const Create = () => {
    let navigate = useNavigate();
    let titleRef ,descriptionRef = useRef()
    const SaveCreate =()=>{
        let title = titleRef.value;
        let description = descriptionRef.value;

        if(IsEmty(title)){
            ErrorTost('Title required')
        }else if(IsEmty(description)){
            ErrorTost('Description required')
        }else{
            TaskCreate(title,description).then((res)=>{
                if(res===true){
                    SuccessTost("Task Create Success")
                    navigate('/all');
                }
            })
        }

    }
    return (
        <Fragment>
            <Container fluid={true} className='content-body'>
                <Row className="d-flex justify-content-center">
                    <div className="col-12 col-lg-8 col-md-12 p-2">
                        <div className="card">
                            <div className="card-body">
                                <h4>Create New</h4>
                                <br />
                                <input ref={(input)=>titleRef=input} type="text" placeholder='Task Name'  className="form-control animated fadeInUp"  />
                                <br />
                                <textarea ref={(input)=>descriptionRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"></textarea>
                                <br />
                                <button onClick={SaveCreate} className='btn float-end btn-primary'>Create</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>

        </Fragment>
    );
};

export default Create;