import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaDownload, FaHome, FaFilter, FaEye, FaLock, FaTrash, FaPen} from 'react-icons/fa';

const MerchantDeals = () => {
  return (
    <>
        <Header/>
      
        <div className="content-wrapper table-full-bx">
            <div className="page-heading">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}><FaHome/> </Link>
                    </li>
                    
                    <li className="breadcrumb-item"><h1 className="page-title"> <Link to={'/Merchant/MerchantDetails'}>Merchant</Link> </h1></li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Merchant Deals </h1></li>
                </ol>
                <div className="col-list-right">
                    <ul className="flexbox">
                        <li>
                            <div className="input-group-icon input-group-icon-left">
                                <span className="input-icon input-icon-right font-16"><i className="ti-search"></i></span>
                                <input className="form-control form-control-rounded form-control-solid" type="text" placeholder="Search ..." />
                            </div>
                        </li>
                        <li>
                            <div className="col-list-right">
                                <Tippy content="Filter">
                                <div className="circle"> <Link className="dropdown-toggle" data-toggle="dropdown"><FaFilter/></Link> </div>
                                </Tippy>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown col-list-right">
                                <Tippy content="Download">
                                    <Link className="nav-link circle dropdown-toggle link" data-toggle="dropdown">
                                        <FaDownload className='downloadBtn'/>
                                    </Link>
                                </Tippy>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item"><i className="ti-printer"></i> Export to Excel </Link>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class=" tab-section">
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link to={'/Merchant/MerchantDetails'} class="nav-link " > Merchant Details </Link>
                </li>
                <li class="nav-item">
                    <Link to={'/Merchant/MerchantDetails/MerchantDeals'} class="nav-link active" > List of Deals </Link>
                </li>
                </ul>
            </div>

            <div className='tab-content'>
                <div className="fade-in-up ibox">
                    <div className="table-scroll">
                        <table className="table table-striped table-bordered table-hover" id="example-table" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Domain</th>
                                    <th>Merchant Type</th>
                                    <th>Merchant Logo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}> 1</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>John </Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>Lorem ispum</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><span className="badge badge-success badge-pill">Online </span></Link></td>
                                    <td>
                                        <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>
                                            <span className="pro"><img src="/images/admin-image.png" alt='Admin' /></span>
                                        </Link>
                                    </td>
                                    <td>
                                        <div className="action-wrap table-action">
                                            <Tippy content="View Detail">
                                                <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><FaEye/></Link>
                                            </Tippy>
                                            <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                            </Tippy>
                                            <Tippy content="Delete">
                                            <Link><FaTrash/></Link>
                                            </Tippy>
                                            <Tippy content="Unblock">
                                            <Link><FaLock/></Link>
                                            </Tippy>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}> 2</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>John </Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>Lorem ispum</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><span className="badge badge-success badge-pill">Online </span></Link></td>
                                    <td>
                                        <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>
                                            <span className="pro"><img src="/images/admin-image.png" alt='Admin' /></span>
                                        </Link>
                                    </td>
                                    <td>
                                        <div className="action-wrap table-action">
                                            <Tippy content="View Detail">
                                                <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><FaEye/></Link>
                                            </Tippy>
                                            <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                            </Tippy>
                                            <Tippy content="Delete">
                                            <Link><FaTrash/></Link>
                                            </Tippy>
                                            <Tippy content="Unblock">
                                            <Link><FaLock/></Link>
                                            </Tippy>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}> 3</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>John </Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>Lorem ispum</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><span className="badge badge-success badge-pill">Online </span></Link></td>
                                    <td>
                                        <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>
                                            <span className="pro"><img src="/images/admin-image.png" alt='Admin' /></span>
                                        </Link>
                                    </td>
                                    <td>
                                        <div className="action-wrap table-action">
                                            <Tippy content="View Detail">
                                                <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><FaEye/></Link>
                                            </Tippy>
                                            <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                            </Tippy>
                                            <Tippy content="Delete">
                                            <Link><FaTrash/></Link>
                                            </Tippy>
                                            <Tippy content="Unblock">
                                            <Link><FaLock/></Link>
                                            </Tippy>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}> 4</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>John </Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>Lorem ispum</Link></td>
                                    <td><Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><span className="badge badge-success badge-pill">Online </span></Link></td>
                                    <td>
                                        <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}>
                                            <span className="pro"><img src="/images/admin-image.png" alt='Admin' /></span>
                                        </Link>
                                    </td>
                                    <td>
                                        <div className="action-wrap table-action">
                                            <Tippy content="View Detail">
                                                <Link to={'/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails'}><FaEye/></Link>
                                            </Tippy>
                                            <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                            </Tippy>
                                            <Tippy content="Delete">
                                            <Link><FaTrash/></Link>
                                            </Tippy>
                                            <Tippy content="Unblock">
                                            <Link><FaLock/></Link>
                                            </Tippy>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul className="pagination float-right">
                        <li className="paginate_button page-item previous disabled"><Link href="#" className="page-link">Previous</Link></li>
                        <li className="paginate_button page-item active"><Link href="#" className="page-link">1</Link></li>
                        <li className="paginate_button page-item"><Link href="#" className="page-link">2</Link></li>
                        <li className="paginate_button page-item next" id="datatable_next"><Link href="#" className="page-link">Next</Link></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>

    </>
  )
}

export default MerchantDeals
