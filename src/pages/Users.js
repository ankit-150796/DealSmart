import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaDownload, FaHome, FaFilter, FaEye, FaLock, FaSearch} from 'react-icons/fa';



const Users = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Header/>
      <div className="content-wrapper table-full-bx">
        <div className="page-heading">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={'/Dashboard'}><FaHome/> </Link>
                </li>
                <li className="breadcrumb-item"><h1 className="page-title"> Users </h1></li>
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
                        <div className="col-list-right">
                            <Tippy content="Filter">
                              <div className="circle"> <Link className="dropdown-toggle" data-toggle="dropdown"  onClick={handleShow}><FaFilter/></Link> </div>
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
        <div className="fade-in-up ibox">
            <div className="table-scroll">
                <table className="table table-striped table-bordered table-hover" id="example-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Profile Picture</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Reward Points</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><Link to={'/Users/UserDetails'}> 1</Link></td>
                            <td>
                                <Link to={'/Users/UserDetails'}>
                                    <span className="pro"><img src="images/admin-image.png" alt='Admin' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Users/UserDetails'}>Mark Smith</Link></td>
                            <td><Link to={'/Users/UserDetails'}>mark.smith@gmail.com</Link></td>
                            <td><Link to={'/Users/UserDetails'}>Male</Link></td>
                            <td><Link to={'/Users/UserDetails'}>25</Link></td>
                            <td>
                                <Link to={'/Users/UserDetails'}><span className="badge badge-success badge-pill">Active</span></Link>
                            </td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Users/UserDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Block">
                                      <Link  onClick={handleShow}><FaLock/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Users/UserDetails'}>2</Link></td>
                            <td>
                                <Link to={'/Users/UserDetails'}>
                                    <span className="pro"><img src="/images/thumbnail.png" alt='Thumbnail'/></span>
                                </Link>
                            </td>
                            <td><Link to={'/Users/UserDetails'}>John</Link></td>
                            <td><Link to={'/Users/UserDetails'}>john@gmail.com</Link></td>
                            <td><Link to={'/Users/UserDetails'}>Male</Link></td>
                            <td><Link to={'/Users/UserDetails'}>50</Link></td>
                            <td>
                                <Link to={'/Users/UserDetails'}><span className="badge bg-red">Block</span></Link>
                            </td>

                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Users/UserDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Block">
                                      <Link><FaLock/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Users/UserDetails'}>3</Link></td>
                            <td>
                                <Link to={'/Users/UserDetails'}>
                                    <span className="pro"><img src="images/thumbnail.png" alt='Thumbnail' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Users/UserDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Users/UserDetails'}>lilth@gmail.com</Link></td>
                            <td><Link to={'/Users/UserDetails'}>Male</Link></td>
                            <td><Link to={'/Users/UserDetails'}>10</Link></td>
                            <td>
                                <Link to={'/Users/UserDetails'}><span className="badge badge-success badge-pill">Active</span></Link>
                            </td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Users/UserDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Block">
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Block </Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure, you want to block? </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}> Block </Button>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Users