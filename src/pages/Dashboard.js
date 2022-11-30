import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tippy from '@tippyjs/react';
import Header from '../components/Header';
import DiscussionsBarChart from './DiscussionsBarChart';
import PlatformBarChart from './PlatformBarChart';
import UsersBarChart from './UsersBarChart';
import { Link } from 'react-router-dom';
import { FaFilter, FaDownload, FaRegUser, FaBox, FaMarker, FaUserTie } from 'react-icons/fa';


const Dashboard = () => {
 
  return (
    
    <>
      <Header/>
      <div className="content-wrapper">
          <div className="fade-in-up">
              <div className="page-heading">
                  <h1 className="page-title"> Dashboard </h1>
                  <div className="col-list-right color-wh">
                      <ul>
                          <li>
                            <Tippy content="Filter">
                              <Link className="dropdown-toggle cicrle_select" data-toggle="dropdown"><FaFilter/></Link>
                            </Tippy>
                              <div className="dropdown-menu dropdown-menu-right">
                                  <Link className="dropdown-item"> Daily</Link>
                                  <Link className="dropdown-item"> Weekly</Link>
                                  <Link className="dropdown-item"> Monthly</Link>
                                  <Link className="dropdown-item show-year"> Yearly</Link>
                                  <Link className="dropdown-item" > Date Range</Link>
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

              <div className="cardsInfo">
                  <div className="row">
                      <div className="col-md-4 col-sm-6">
                          <div className="card mb-4 ">
                              <div className="card-body flexbox-b  text-success">
                                  <div className="easypie me-4">
                                      <span className="easypie-data text-pink" ><i><FaRegUser/></i></span>
                                  </div>
                                  <div>
                                      <h3 className="font-strong ">53</h3>
                                      <div className="text-muted">Total Users</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 px-2">
                          <div className="card mb-4">
                              <div className="card-body text-primary flexbox-b">
                                  <div className="easypie  me-4">
                                      <span className="easypie-data " ><i className="lightRed"><FaBox/></i></span>
                                  </div>
                                  <div>
                                      <h3 className="font-strong">30</h3>
                                      <div className="text-muted">Total Deals</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                          <div className="card mb-4">
                              <div className="card-body flexbox-b">
                                  <div className="easypie  me-4">
                                      <span className="easypie-data pd-set" ><i className="grey"> <FaMarker/></i></span>
                                  </div>
                                  <div>
                                      <h3 className="font-strong">30</h3>
                                      <div className="text-muted">Total Points & Rewards</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                          <div className="card mb-4">
                              <div className="card-body flexbox-b">
                                  <div className="easypie  me-4">
                                      <span className="easypie-data pd-set" ><i><FaUserTie/> </i></span>
                                  </div>
                                  <div>
                                      <h3 className="font-strong">30</h3>
                                      <div className="text-muted">Discussions</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 px-2">
                          <div className="card mb-4 ">
                              <div className="card-body flexbox-b text-success">
                                  <div className="easypie me-4">
                                      <span className="easypie-data text-pink" ><i><FaRegUser/> </i></span>
                                  </div>
                                  <div>
                                      <h3 className="font-strong ">50</h3>
                                      <div className="text-muted">Total Visitors on the platform</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12">
                      <div className="ibox">
                          <div className="ibox-head">
                              <div className="ibox-title">View Most Active Users (Api data)</div>
                          </div>
                          <div className="ibox-body">
                              <div className="flexbox mb-4">
                                  <div className="d-inline-flex"></div>
                              </div>
                              <div>
                                  <UsersBarChart/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12">
                      <div className="ibox">
                          <div className="ibox-head">
                              <div className="ibox-title">Deals</div>
                          </div>
                          <div className="ibox-body">
                              <div className="flexbox mb-4">
                                  <div className="d-inline-flex"></div>
                              </div>
                              <div>
                                <PlatformBarChart />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12">
                      <div className="ibox">
                          <div className="ibox-head">
                              <div className="ibox-title">Discussions</div>
                          </div>
                          <div className="ibox-body">
                              <div className="flexbox mb-4">
                                  <div className="d-inline-flex"></div>
                              </div>
                              <div>
                                <DiscussionsBarChart/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12">
                      <div className="ibox">
                          <div className="ibox-head">
                              <div className="ibox-title">Total traffic on the platform</div>
                          </div>
                          <div className="ibox-body">
                              <div className="flexbox mb-4">
                                  <div className="d-inline-flex"></div>
                              </div>
                              <div>
                                <PlatformBarChart />
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

export default Dashboard