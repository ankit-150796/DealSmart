import React from 'react';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaAngleLeft, FaPen,  FaLock, FaTrash} from 'react-icons/fa';

const MerchantDetails = () => {
  return (
    <>
        <Header/>
     

        <div className="content-wrapper table-full-bx">
            <div className="page-heading detail">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/Merchant'}><FaAngleLeft/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title">Merchant Detail </h1></li>
                </ol>
            </div>

            <div class=" tab-section">
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link to={'/Merchant/MerchantDetails'} class="nav-link active" > Merchant Details </Link>
                </li>
                <li class="nav-item">
                    <Link to={'/Merchant/MerchantDetails/MerchantDeals'} class="nav-link" > List of Deals </Link>
                </li>
                </ul>
            </div>

            <div className='tab-content'>
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
                                        <Link><FaLock/></Link>
                                    </Tippy>

                                </div>
                                <div className="ibox-title"><span>Merchant Detail</span></div>
                                <div class="rowbody">
                                    <div class="listview">
                                    <dl class="list">
                                        <dt>Name</dt>
                                        <dt>John Smith</dt>
                                    </dl>
                                    <dl class="list">
                                        <dt>Merchant Domain </dt>
                                        <dt>Lorem ispum</dt>
                                    </dl>
                                    <dl class="list ad-spa">
                                        <dt>Merchant Type </dt>
                                        <dt><span className="badge badge-success badge-pill"> Online Store </span></dt>
                                    </dl>
                                    <dl class="list">
                                        <dt>Phone Number </dt>
                                        <dt> 91- 987798888 </dt>
                                    </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ibox fullSpace">
                <div class="col-bx-top">
                <div class="repeatedrow">
                    <div class="user-details">
                            <div class="ibox-title"><span>Number of Deals posted</span></div>
                            <div class="rowbody">
                                <div class="listview">
                                    <dl class="list"> <dt>Deals Posted</dt> <dt>42</dt> </dl>
                                    <dl class="list"> <dt>Deals Completed</dt> <dt>20</dt> </dl>
                                    <dl class="list"> <dt>Deals Cancelled</dt> <dt>20</dt> </dl>
                                    <dl class="list"> <dt>Reported  Items against Merchant</dt> <dt>0</dt> </dl>
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

export default MerchantDetails