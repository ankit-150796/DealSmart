import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft } from 'react-icons/fa';

const PointsDetails = () => {
  return (
    <>  
        <Header/>
         <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Points'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Points Detail </h1></li>
                </ol>
            </div>
            <div className="ibox set-spacing">
                <div className="ibox-body">
                    <div className="col-bx-top">
                        <div className="left-panel light">
                            <img src="/images/thumbnail.png" alt='Thumbnail' />
                        </div>
                        <div className="user-details">
                            <div className="repeatedrow">
                                <div className="ibox-title"><span> Rewards & Points </span></div>
                                <div className="rowbody">
                                    <div className="listview">
                                        <dl className="list">
                                            <dt>Name</dt>
                                            <dt>John</dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Email</dt>
                                            <dt> john@gmail.com</dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Reward Points Requested</dt>
                                            <dt>35</dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Status</dt>
                                            <dt><span class="badge badge-success badge-pill">Approved</span></dt>
                                        </dl>

                                        <dl className="list">
                                            <dt>No. of Likes</dt>
                                            <dt> 40</dt>
                                        </dl>

                                        <dl className="list">
                                            <dt>No. of Comments</dt>
                                            <dt> 1</dt>
                                        </dl>

                                        <dl className="list">
                                            <dt>Coupon Code</dt>
                                            <dt> - </dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Expiry Date</dt>
                                            <dt> 10 Jul 2020 </dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Remarks</dt>
                                            <dt> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </dt>
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

export default PointsDetails