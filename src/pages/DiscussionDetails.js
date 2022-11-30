import React from 'react';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft, FaPen, FaTrash} from 'react-icons/fa';

const DiscussionDetails = () => {
  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Discussion'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Discussion Detail </h1></li>
                </ol>
            </div>

           
            <div className="tab-content">
                <div className="ibox set-spacing">
                    <div className="col-bx-top">
                        <div className="left-panel light">
                            <img src="/images/thumbnail.png" alt='Thumbnail' />
                        </div>
                        <div className="user-details">
                            <div className="repeatedrow">
                                <div className="action-wrap float-right">
                                    <Tippy content="Edit">
                                        <Link><FaPen/></Link>
                                    </Tippy>

                                    <Tippy content="Delete">
                                        <Link><FaTrash/></Link>
                                    </Tippy>
                                </div>
                                <div className="ibox-title"><span>Discussion Detail</span></div>
                                <div className="rowbody">
                                    <div className="listview">
                                        <dl className="list">
                                            <dt>Title</dt>
                                            <dt>Lorem ispum</dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Posted by</dt>
                                            <dt>John Smith</dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>No. of view</dt>
                                            <dt>85</dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>No. of likes</dt>
                                            <dt>55</dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Picture</dt>
                                            <dt>
                                                <ul className="pic5 light">
                                                    <li><img src="/images/thumbnail.png" alt='Thumbnail' /></li>
                                                    <li><img src="/images/thumbnail.png" alt='Thumbnail' /></li>
                                                    <li><img src="/images/thumbnail.png" alt='Thumbnail' /></li>
                                                    <li><img src="/images/thumbnail.png" alt='Thumbnail' /></li>
                                                </ul>
                                            </dt>
                                        </dl>
                                        <dl className="list">
                                            <dt>Description</dt>
                                            <dt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ibox fullSpace">
                    <div className="col-bx-top">
                        <div className="repeatedrow">
                            <div className="user-details">
                                <div className="ibox-title"><span>Comments</span></div>
                                <div className="rowbody">
                                    <div className="listview">
                                        <ul className="userViews">
                                            <li>
                                                <div className="profile">
                                                    <figure><img src="/images/thumbnail.png"alt='Thumbnail' /></figure>
                                                    <div className="info">
                                                        <h5>Mark</h5>
                                                        <h6>mark@gmail.com</h6>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                                <ul className="userViews">
                                                    <li>
                                                        <div className="profile">
                                                            <figure><img src="/images/thumbnail.png" alt='Thumbnail' /></figure>
                                                            <div className="info">
                                                                <h5>Mark</h5>
                                                                <h6>mark@gmail.com</h6>
                                                            </div>
                                                        </div>
                                                        <div className="comment">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="profile">
                                                            <figure><img src="/images/thumbnail.png" alt='Thumbnail' /></figure>
                                                            <div className="info">
                                                                <h5>Mark</h5>
                                                                <h6>mark@gmail.com</h6>
                                                            </div>
                                                        </div>
                                                        <div className="comment">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="profile">
                                                    <figure><img src="/images/thumbnail.png" alt='Thumbnail' /></figure>
                                                    <div className="info">
                                                        <h5>Mark</h5>
                                                        <h6>mark@gmail.com</h6>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </li>
                                        </ul>
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

export default DiscussionDetails