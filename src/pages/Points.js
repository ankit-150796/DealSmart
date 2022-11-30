import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaDownload, FaHome, FaEye, FaTrash, FaSearch, FaPlus} from 'react-icons/fa';

const Points = () => {
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
                    <Link to={'/'}> <FaHome/></Link>
                </li>
                <li className="breadcrumb-item"><h1 className="page-title"> Points </h1></li>
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
                <Link to={'/Points'} class="nav-link active" > Requested </Link>
              </li>
              <li class="nav-item">
                <Link to={'/Points/PointsDetails/Rewards'} class="nav-link " > Points & Rewards </Link>
              </li>
            </ul>
        </div>

        <div className="fade-in-up ibox tab-content">
            <div class="total-stats">
                <div class="col"><Link>Pending<span>2430</span></Link></div>
                <div class="col"><Link> Approved   <span>1795</span></Link></div>
                <div class="col"><Link> Decline <span>2095</span></Link></div>
            </div>
            <div className="table-scroll">
                <table className="table table-striped table-bordered table-hover" id="example-table" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Posted by</th>
                            <th>Description</th>
                            <th>Number of views</th>
                            <th>Number of comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><Link to={'/Points/PointsDetails'}> 1 </Link></td>
                            <td><Link to={'/Points/PointsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>John</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>Lorem ipsum dolor sit amet,</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>10</Link></td>
                            <td><Link to={'/Points/PointsDetails'}> 50</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Points/PointsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    
                                    <Tippy content="Delete">
                                       <Link  onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Points/PointsDetails'}> 2 </Link></td>
                            <td><Link to={'/Points/PointsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>John</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>Lorem ipsum dolor sit amet,</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>10</Link></td>
                            <td><Link to={'/Points/PointsDetails'}> 50</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Points/PointsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    
                                    <Tippy content="Delete">
                                        <Link  onClick={handleShow}><FaTrash/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Points/PointsDetails'}> 3 </Link></td>
                            <td><Link to={'/Points/PointsDetails'}>Lorem Ipsum</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>John</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>Lorem ipsum dolor sit amet,</Link></td>
                            <td><Link to={'/Points/PointsDetails'}>10</Link></td>
                            <td><Link to={'/Points/PointsDetails'}> 50</Link></td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Points/PointsDetails'}><FaEye/></Link>
                                    </Tippy>
                                    
                                    <Tippy content="Delete">
                                        <Link  onClick={handleShow}><FaTrash/></Link>
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

      <div class="add-more-container" >
          <Tippy content="Add Points">
            <Link to={'/AddPoints'}> <FaPlus/> </Link>
          </Tippy>
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

export default Points