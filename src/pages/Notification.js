import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaEye, FaPlus} from 'react-icons/fa';


const Notification = () => {
  return (
    <>
      <Header/>
      
      <div className="content-wrapper table-full-bx">
        <div className="page-heading">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={'/Dashboard'}><FaHome/> </Link>
                </li>
                <li className="breadcrumb-item"><h1 className="page-title"> Notification </h1></li>
            </ol>
            <div className="col-list-right">
                <ul className="flexbox">
                  <li>
                        <div className="input-group-icon input-group-icon-left">
                            <span className="input-icon input-icon-right FaSearch"><FaSearch/></span>
                            <input className="form-control form-control-rounded form-control-solid" type="text" placeholder="Search ..." />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class=" tab-section">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <Link to={'/Notification'} class="nav-link active" > Notification </Link>
              </li>
              <li class="nav-item">
                <Link to={'/Notification/NotificationDetails/Groups'} class="nav-link " > Groups Notification </Link>
              </li>
            </ul>
        </div>

        <div className="fade-in-up ibox tab-content">
            <div className="table-scroll">
                <table className="table table-striped table-bordered table-hover" id="example-table" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Notification Content</th>
                            <th>Date & Time</th>
                            <th>Announcement Link</th>
                            <th>Users </th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><Link to={'/Notification/NotificationDetails'}> 1</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem Ipsum</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem ipsum dolor sit amet,</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> 10 Jan 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> - </Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Individual </Link> </td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Notification/NotificationDetails'}><FaEye/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Notification/NotificationDetails'}> 2</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem Ipsum</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem ipsum dolor sit amet,</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> 10 Jan 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> - </Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Individual </Link> </td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Notification/NotificationDetails'}><FaEye/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Notification/NotificationDetails'}> 3</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem Ipsum</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem ipsum dolor sit amet,</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> 10 Jan 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> - </Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Individual </Link> </td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Notification/NotificationDetails'}><FaEye/></Link>
                                    </Tippy>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Link to={'/Notification/NotificationDetails'}> 4</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem Ipsum</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Lorem ipsum dolor sit amet,</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> 10 Jan 2020, 7:20 AM</Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> - </Link></td>
                            <td><Link to={'/Notification/NotificationDetails'}> Individual </Link> </td>
                            <td>
                                <div className="action-wrap table-action">
                                    <Tippy content="View Detail">
                                        <Link to={'/Notification/NotificationDetails'}><FaEye/></Link>
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
          <Tippy content=" Add Discussion">
            <Link to={'/AddNotification'}> <FaPlus/> </Link>
          </Tippy>
      </div>

      

    </>
  )
}

export default Notification