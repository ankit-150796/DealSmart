import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft } from 'react-icons/fa';

const ReportedDetails = () => {
  return (
    <>  
        <Header/>
         <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Reported'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Reported Detail </h1></li>
                </ol>
            </div>

             <div className="fade-in-up ibox">
        <div className="dispute-bx">
            <div className="user-details">
                <div className="ibox-title"><span> Reported Item</span></div>

                <div className="rowbody">
                    <div className="listview">
                        <dl className="list">
                            <dt>Reported Time</dt>
                            <dt>10 Jan 2020, 7:20 AM</dt>
                        </dl>
                        <dl className="list">
                            <dt>Raised By</dt>
                            <dt>Mark Smith</dt>
                        </dl>
                        <dl className="list">
                            <dt>Reported Item</dt>
                            <dt>Deal issues</dt>
                        </dl>
                        <dl className="list">
                            <dt>Discussion</dt>
                            <dt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dt>
                        </dl>
                        <dl className="list">
                            <dt></dt>
                            <dt>
                                <Link className="common-btn cancel" > Mark Resolved </Link>
                            </dt>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="ibox set-spacing">
        <div className="ibox-body">
            <div className="col-bx-top">
                <div className="left-panel light">
                    <img src="/images/thumbnail.png" alt='Thumbnail' />
                </div>
                <div className="user-details">
                    <div className="repeatedrow">
                        <div className="ibox-title"><span> User Detail </span></div>
                        <div className="rowbody">
                            <div className="listview">
                                <dl className="list">
                                    <dt>Id</dt>
                                    <dt>2</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Full Name</dt>
                                    <dt>Mark Smith</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Email</dt>
                                    <dt>marksmith@gmail.com</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Phone Number</dt>
                                    <dt>91- 987798888</dt>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    </>
  )
}

export default ReportedDetails