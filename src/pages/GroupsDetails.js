import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft } from 'react-icons/fa';

const GroupsDetails = () => {
  return (
    <>  
        <Header/>
         <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Notification/NotificationDetails/Groups'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Groups Detail </h1></li>
                </ol>
            </div>
            <div className="fade-in-up ibox">
                <div className="user-details">
                    <div className="ibox-title"><span> Groups Information</span></div>
                    <div className="rowbody">
                        <div className="listview">
                            <dl className="list">
                                <dt>Date / Time</dt>
                                <dt>10 Jan 2020, 7:20 AM</dt>
                            </dl>
                            <dl className="list">
                                <dt>Title</dt>
                                <dt>Lorem Ipsum</dt>
                            </dl>
                            <dl className="list">
                                <dt>Announcement Link</dt>
                                <dt>
                                    -
                                </dt>
                            </dl>
                            <dl className="list">
                                <dt>Users</dt>
                                <dt>
                                    All Users
                                </dt>
                            </dl>
                            <dl className="list">
                                <dt>Notification Content</dt>
                                <dt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dt>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default GroupsDetails