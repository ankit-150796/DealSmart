import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaDownload, FaHome, FaSearch, FaPen} from 'react-icons/fa';

const Rewards = () => {
  return (
    <>
      <Header/>
      <div className="content-wrapper table-full-bx">
        <div className="page-heading">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={'/Dashboard'}> <FaHome/> </Link>
                </li>
                <li className="breadcrumb-item"><h1 className="page-title"> Rewards </h1></li>
            </ol>
            <div className="col-list-right">
                <ul className="flexbox">
                    <li>
                        <div className="input-group-icon input-group-icon-left">
                            <span className="input-icon input-icon-right FaSearch"><FaSearch/></span>
                            <input className="form-control form-control-rounded form-control-solid" type="text" placeholder="Search ..." />
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
                <Link to={'/Points'} class="nav-link " > Requested </Link>
              </li>
              <li class="nav-item">
                <Link to={'/Points/PointsDetails/Rewards'} class="nav-link active" > Points & Rewards </Link>
              </li>
            </ul>
        </div>
        <div className='tab-content'>
            <div className="fade-in-up ibox ">
                <div className="table-scroll">
                    <table className="table table-striped table-bordered table-hover" id="example-table" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Sr. No </th>
                                <th>Activity </th>
                                <th>Reward Points </th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><Link> 1 </Link></td>
                                <td><Link><span class="color-green bold">5</span> Approved deals within <span class="bold">5</span> days</Link></td>
                                <td><Link>100</Link></td>
                                <td>
                                    <div className="action-wrap table-action">
                                        <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                        </Tippy>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><Link> 2 </Link></td>
                                <td><Link><span class="color-blue bold">7</span> Approved discussion within <span class="bold">7</span> days </Link></td>
                                <td><Link>100</Link></td>
                                <td>
                                    <div className="action-wrap table-action">
                                        <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                        </Tippy>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><Link> 3</Link></td>
                                <td><Link><span class="color-green bold">5</span> Approved deals within <span class="bold">5</span> days</Link></td>
                                <td><Link>100</Link></td>
                                <td>
                                    <div className="action-wrap table-action">
                                        <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                        </Tippy>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><Link> 4</Link></td>
                                <td><Link><span class="color-blue bold">7</span> Approved discussion within <span class="bold">7</span> days </Link></td>
                                <td><Link>100</Link></td>
                                <td>
                                    <div className="action-wrap table-action">
                                        <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                        </Tippy>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><Link> 5 </Link></td>
                                <td><Link><span class="color-green bold">5</span> Approved deals within <span class="bold">5</span> days</Link></td>
                                <td><Link>100</Link></td>
                                <td>
                                    <div className="action-wrap table-action">
                                        <Tippy content="Edit">
                                            <Link><FaPen/></Link>
                                        </Tippy>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><Link> 6 </Link></td>
                                <td><Link><span class="color-blue bold">7</span> Approved discussion within <span class="bold">7</span> days </Link></td>
                                <td><Link>100</Link></td>
                                <td>
                                    <div className="action-wrap table-action">
                                        <Tippy content="Edit">
                                            <Link><FaPen/></Link>
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

export default Rewards