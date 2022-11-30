import React from 'react';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft, FaPen,  FaCheck, FaTrash} from 'react-icons/fa';

const DealsDetails = () => {
  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Deals'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Deals Detail </h1></li>
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

                                <Tippy content="Edit">
                                    <Link><FaPen/></Link>
                                </Tippy>

                                <Tippy content="Delete">
                                      <Link><FaTrash/></Link>
                                </Tippy>

                                <Tippy content="Approve">
                                    <Link><FaCheck/></Link>
                                </Tippy>
                            </div>
                            <div className="ibox-title"><span>User Details</span></div>
                            <div class="rowbody">
                                <div class="listview">
                                <dl class="list">
                                    <dt>Name</dt>
                                    <dt>John Smith</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Title </dt>
                                    <dt>Lorem ispum</dt>
                                </dl>
                                <dl class="list ad-spa">
                                    <dt>Category</dt>
                                    <dt>Lorem ispum</dt>
                                </dl>
                                    <dl class="list">
                                    <dt>Pictures </dt>
                                    <dt>
                                        <ul class="pic5 light">
                                            <li><img src="/images/thumbnail.png" alt='Thumbnail' /></li>
                                            <li><img src="/images/thumbnail.png" alt='Thumbnail' /></li>
                                        </ul>
                                    </dt>
                                </dl>
                                    <dl class="list">
                                    <dt>Description </dt>
                                    <dt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Original Price</dt>
                                    <dt>$55</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Deal Price</dt>
                                    <dt>$55</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Discount percentage</dt>
                                    <dt>15%</dt>
                                </dl>
                                    <dl class="list">
                                    <dt>Status</dt>
                                    <dt><span class="badge badge-success badge-pill">Approved</span></dt>
                                </dl>
                                <dl class="list">
                                    <dt>No. of Likes</dt>
                                    <dt>40</dt>
                                </dl>
                                <dl class="list">
                                    <dt>No. of Comments</dt>
                                    <dt>10</dt>
                                </dl>
                                <dl class="list">
                                    <dt>No. of views</dt>
                                    <dt>50</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Date/Time</dt>
                                    <dt>15 Jun 2020, 7:20 AM</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Deal Link</dt>
                                    <dt>http:loremipsum.com</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Expiry Date</dt>
                                    <dt>10 Jul 2020</dt>
                                </dl>
                                <dl class="list">
                                    <dt>Created by</dt>
                                    <dt>John</dt>
                                </dl>
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

export default DealsDetails