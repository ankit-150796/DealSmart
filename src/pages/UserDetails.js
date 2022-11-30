import React from 'react';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft, FaLock, FaPlus} from 'react-icons/fa';

const UserDetails = () => {
  return (
    <>
        <Header/>

        <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Users'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> User Detail </h1></li>
                </ol>
            </div>

            <div className="ibox set-spacing">
                <div className="col-bx-top">
                    <div className="left-panel light">
                        <img src="/images/thumbnail.png" alt='Thumbnail' />
                    </div>
                    <div className="user-details">
                        <div className="repeatedrow">
                            <div className="action-wrap float-right">
                                <Tippy content="Block">
                                    <Link><FaLock/></Link>
                                </Tippy>
                                <Tippy content="Add Reward Points">
                                    <Link><FaPlus/></Link>
                                </Tippy>

                            </div>
                            <div className="ibox-title"><span>User Details</span></div>
                            <div className="rowbody">
                                <div className="listview">
                                    <dl className="list">
                                        <dt>Email</dt>
                                        <dt>johnsmith@gmail.com</dt>
                                    </dl>
                                    <dl className="list">
                                        <dt>Gender</dt>
                                        <dt>Male</dt>
                                    </dl>
                                    <dl className="list ad-spa">
                                        <dt>Status</dt>
                                        <dt><span className="badge badge-success badge-pill">Active</span></dt>
                                    </dl>
                                    <dl className="list">
                                        <dt>Total Reward Points</dt>
                                        <dt>25</dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ibox fullSpace">
                <div className="marginBottom">
                    <div className="user-details">
                        <div className="ibox-title"><span> User Statistics</span></div>
                        <div className="rowbody">
                            <div className="listview">
                                <dl className="list">
                                    <dt>Deals Posted</dt>
                                    <dt>8</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Deals Approved</dt>
                                    <dt>8</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Deals Declined</dt>
                                    <dt>2</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Discussions Posted</dt>
                                    <dt>4</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Discussions Approved</dt>
                                    <dt>2</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Discussions Declined</dt>
                                    <dt>2</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Likes Given</dt>
                                    <dt>5</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Likes Received</dt>
                                    <dt>7</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Comments Given</dt>
                                    <dt>2</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Comments Received</dt>
                                    <dt>2</dt>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dispute-bx">
                    <div className="user-details">
                        <div className="ibox-title"><span>Reported Deals/Discussions</span></div>

                        <div className="rowbody">
                            <div className="listview">
                                <dl className="list">
                                    <dt>Total Reported By User</dt>
                                    <dt>1</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Total Reported Against User</dt>
                                    <dt>2</dt>
                                </dl>
                                <dl className="list">
                                    <dt>Reported Against & Approved</dt>
                                    <dt>8</dt>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserDetails