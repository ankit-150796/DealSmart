import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft, FaPen, FaLock} from 'react-icons/fa';

const AdminDetails = () => {
  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Admins'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title">Admin Detail </h1></li>
                </ol>
            </div>
            <div className="fade-in-up ibox">
                <div className="user-details">
                    <div className="action-wrap float-right">
                        <Tippy content="Edit">
                            <Link><FaPen/></Link>
                        </Tippy>
                        <Tippy content="Unblock">
                            <Link><FaLock/></Link>
                        </Tippy>
                    </div>

                    <div className="ibox-title"><span>Profile Info</span></div>
                    <div className="rowbody">
                        <div className="listview">
                            <dl className="list">
                                <dt>Name</dt>
                                <dt>John Smith</dt>
                            </dl>
                            <dl className="list">
                                <dt>Email</dt>
                                <dt>john@gmail.com</dt>
                            </dl>
                            <dl className="list">
                                <dt>Type</dt>
                                <dt><span className="badge bg-sky">Mod</span></dt>
                            </dl>
                            <dl className="list">
                                <dt>Status</dt>
                                <dt><span className="badge bg-green">Active</span></dt>
                            </dl>
                            <dl className="list">
                                <dt>Admin Access</dt>
                                <dt>
                                    <span className="badge bg-green">Dashboard</span>
                                    <span className="badge bg-red">Deals</span>
                                    <span className="badge bg-orange">Merchant</span>
                                    <span className="badge bg-blue">User</span>
                                    <span className="badge bg-pink">Discussion</span>
                                    <span className="badge bg-green">Notification</span>
                                </dt>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminDetails