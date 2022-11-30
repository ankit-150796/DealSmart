import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaDownload, FaHome, FaFilter, FaEye, FaTrash, FaSearch, FaPen, FaTimes} from 'react-icons/fa';

const Deals = () => {

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
                <li className="breadcrumb-item"><h1 className="page-title"> Deals </h1></li>
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
                        <div class="select-box space-rg"> 
                            <select class="form-control" data-width="100px">
                                <option>10</option>
                                <option>50</option>
                                <option>100</option>
                                <option>A to Z</option>
                                <option>Z to A</option>
                            </select>
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
        <div className="fade-in-up ibox">
            <div className="table-scroll">
                <table className="table table-striped table-bordered table-hover" id="example-table" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Username</th>
                            <th>Category</th>
                            <th>Deal Price</th>
                            <th>No. of Likes</th>
                            <th>No. of Comments</th>
                            <th> No. of views </th>
                            <th> Status </th>
                            <th> Date/Time </th>
                            <th> Expiry Date </th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><Link to={'/Deals/DealsDetails'}> 1 </Link></td>
                            <td>
                                <Link to={'/Deals/DealsDetails'}>
                                    <span className="pro"><img src="images/admin-image.png" alt='Admin' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Mark Smith</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>$ 55</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 40</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 50</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> <span class="badge badge-ongoing badge-pill">Pending</span></Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 15 Jun 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10 Jul 2020</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 55</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Deals/DealsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Delete">
                                      <Link onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>

                                    <Tippy content="Edit">
                                      <Link><FaPen/></Link>
                                    </Tippy>

                                    <Tippy content="Decline">
                                      <Link><FaTimes/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Deals/DealsDetails'}> 2 </Link></td>
                            <td>
                                <Link to={'/Deals/DealsDetails'}>
                                    <span className="pro"><img src="images/admin-image.png" alt='Admin' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Mark Smith</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>$ 55</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 40</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 50</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> <span class="badge badge-success badge-pill">Approved</span></Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 15 Jun 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10 Jul 2020</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 55</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Deals/DealsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Delete">
                                      <Link onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>
                                    <Tippy content="Edit">
                                      <Link><FaPen/></Link>
                                    </Tippy>
                                    <Tippy content="Decline">
                                      <Link><FaTimes/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Deals/DealsDetails'}> 3 </Link></td>
                            <td>
                                <Link to={'/Deals/DealsDetails'}>
                                    <span className="pro"><img src="images/admin-image.png" alt='Admin' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Mark Smith</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>$ 55</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 40</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 50</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> <span class="badge badge-ongoing badge-pill">Pending</span></Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 15 Jun 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10 Jul 2020</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 55</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Deals/DealsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Delete">
                                        <Link onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>

                                    <Tippy content="Edit">
                                      <Link><FaPen/></Link>
                                    </Tippy>

                                    <Tippy content="Decline">
                                      <Link><FaTimes/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Deals/DealsDetails'}> 4 </Link></td>
                            <td>
                                <Link to={'/Deals/DealsDetails'}>
                                    <span className="pro"><img src="images/admin-image.png" alt='Admin' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Deals/DealsDetails'}> Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> Mark Smith</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> $ 55</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 40</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 50</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> <span class="badge badge-success badge-pill">Approved</span></Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 15 Jun 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10 Jul 2020</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 55</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Deals/DealsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Delete">
                                    <Link onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>

                                    <Tippy content="Edit">
                                      <Link><FaPen/></Link>
                                    </Tippy>

                                    <Tippy content="Decline">
                                      <Link><FaTimes/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Deals/DealsDetails'}> 5 </Link></td>
                            <td>
                                <Link to={'/Deals/DealsDetails'}>
                                    <span className="pro"><img src="images/admin-image.png" alt='Admin' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Mark Smith</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>$ 55</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 40</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 50</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> <span class="badge badge-ongoing badge-pill">Pending</span></Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 15 Jun 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10 Jul 2020</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 55</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Deals/DealsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Delete">
                                    <Link onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>

                                    <Tippy content="Edit">
                                      <Link><FaPen/></Link>
                                    </Tippy>

                                    <Tippy content="Decline">
                                      <Link><FaTimes/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Deals/DealsDetails'}> 6 </Link></td>
                            <td>
                                <Link to={'/Deals/DealsDetails'}>
                                    <span className="pro"><img src="images/admin-image.png" alt='Admin' /></span>
                                </Link>
                            </td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Mark Smith</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}>$ 55</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 40</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 50</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> <span class="badge badge-success badge-pill">Approved</span></Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 15 Jun 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 10 Jul 2020</Link></td>
                            <td><Link to={'/Deals/DealsDetails'}> 55</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Deals/DealsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    <Tippy content="Delete">
                                        <Link onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>

                                    <Tippy content="Edit">
                                      <Link><FaPen/></Link>
                                    </Tippy>

                                    <Tippy content="Decline">
                                      <Link><FaTimes/></Link>
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
          <Modal.Title> Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure you want to Delete? </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}> Done </Button>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
        </Modal.Footer>
      </Modal>

        
    </>
  )
}

export default Deals