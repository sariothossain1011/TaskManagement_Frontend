import React, { Fragment } from 'react';
import {Container,Navbar} from "react-bootstrap";
import {AiOutlineBars, AiOutlineLogout, AiOutlineUser} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import LogoImg from '../../Assets/Images/sariot.jpg'

const MasterLayout = () => {

    const MenuBarClickHandler=()=>{

    }
    return (
        <Fragment>
            <Navbar className="fixed-top px-0 shadow-sm">
                <Container fluid={true}>
                    <Navbar.Brand>
                        <a className='icon-nav m-0 h5' onClick={MenuBarClickHandler}><AiOutlineBars /></a>
                        <img className="nav-logo mx-2"  src={LogoImg} alt="logo"/>
                    </Navbar.Brand>
                        <div className="float-right h-auto d-flex">
                            <div className="user-dropdown">
                                <img src={LogoImg} alt="" className="icon-nav-img icon-nav" />
                                <div className="user-dropdown-content">
                                    <div className="mt-4 text-center">
                                        <img src={LogoImg} alt="" className='icon-nav-img' />
                                        <h6>sariot hossain</h6>
                                        <hr className="user-dropdown-divider p-0" />
                                    </div>
                                    <NavLink to='/Profile' className='side-bar-item'>
                                        <AiOutlineUser className='side-bar-item-icon'/>
                                        <span className='side-bar-item-caption'>Profile</span>
                                    </NavLink>
                                    <a className='side-bar-item'>
                                        <AiOutlineLogout className='side-bar-item-icon'/>
                                        <span className='side-bar-item-caption'>Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default MasterLayout;