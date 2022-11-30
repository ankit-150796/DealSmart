import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom'
import { FaBell, FaBars, FaRegEnvelope, FaUserAlt, FaRegSun, FaArrowRight } from "react-icons/fa";

const Header = () => {
    const [clicked, setClicked] = useState('');
    const handleClick = () => {
        document.body.classList.toggle('sidebar-mini');
        clicked ? setClicked('') : setClicked('nav-link sidebar-toggler collapsed ');
    };

    const [isActive, setIsActive] = useState(false);
    const handleClick1 = event => {
        setIsActive(current => !current);
    };

    const [isNotif, setisNotif] = useState(false);
    const handleClick2 = event => {
        setisNotif(current => !current);
    };


  return (
    <>

        <header className="header">
            <div className="page-brand">
                <Link to={'/'} className="link">
                    LOGO
                    {/* <img src='images/logo.png' alt=''/> */}
                </Link>
            </div>
            <div className="flexbox flex-1">
                
                <ul className="nav navbar-toolbar">
                    <li>
                        <div className={clicked || 'nav-link sidebar-toggler' } onClick={handleClick}> <FaBars/> </div>
                    </li>
                </ul>
                
                <ul className="nav navbar-toolbar">                 
                    <li className={isNotif ? 'dropdown dropdown-notification show' : 'dropdown dropdown-notification'} onClick={handleClick2}
                    >
                        <Tippy content="Notification">
                            <Link className="nav-link dropdown-toggle toolbar-icon" data-toggle="dropdown">
                                <FaBell/>
                                <i className=" rel"><span className="notify-signal"></span></i>
                            </Link>
                        </Tippy>

                        <ul className={isNotif ? 'dropdown-menu dropdown-menu-right dropdown-menu-media show' : 'dropdown-menu dropdown-menu-right dropdown-menu-media'} onClick={handleClick2}
                        >
                            <li className="dropdown-menu-header">
                                <div>
                                    <span className="font-18"><strong> 5 New </strong> Notifications </span>
                                    <Link  className="text-muted font-13"> view all </Link>
                                </div>
                            </li>
                            <div className="p-3">
                                <ul className="timeline scroller" data-height="320px" data-color="#71808f">
                                    <li className="timeline-item"><i className="ti-check timeline-icon"></i> 2 Issue fixed <small className="float-right text-muted ml-2 nowrap">Just now</small></li>
                                    <li className="timeline-item"><i className="ti-announcement timeline-icon"></i>
                                        <span>7 new feedback
                                        </span><small className="float-right text-muted">5 mins</small></li>
                                        <li className="timeline-item"><i className="ti-truck timeline-icon"></i>25 new orders sent<small className="float-right text-muted ml-2 nowrap">24 mins</small></li>
                                        <li className="timeline-item"><i className="ti-shopping-cart timeline-icon"></i>12 New orders<small className="float-right text-muted ml-2 nowrap">45 mins</small></li>
                                        <li className="timeline-item"><i className="ti-user timeline-icon"></i>18 new users registered<small className="float-right text-muted ml-2 nowrap">1 hrs</small></li>
                                        <li className="timeline-item"><i className="ti-harddrives timeline-icon"></i>
                                        <span>Server Error
                                            
                                        </span><small className="float-right text-muted">2 hrs</small></li>
                                    <li className="timeline-item"><i className="ti-info-alt timeline-icon"></i>
                                        <span> System Warning
                                            <Link className="text-purple ml-2"> Check </Link>
                                        </span><small className="float-right text-muted ml-2 nowrap">12:07</small>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </li>
                    <li className= {isActive ? 'dropdown dropdown-user show' : 'dropdown dropdown-user'} onClick={handleClick1}>
                        <Link className="nav-link dropdown-toggle link" data-toggle="dropdown">
                            <img src='/images/admin-image.png' alt='Admin' />
                        </Link>
                        <div className={isActive ? 'dropdown-menu dropdown-arrow dropdown-menu-right admin-dropdown-menu show' : 'dropdown-menu dropdown-arrow dropdown-menu-right admin-dropdown-menu'} onClick={handleClick1}>
                            <div className="dropdown-arrow"></div>
                            <div className="dropdown-header">
                                <div className="admin-avatar">
                                 <img src='/images/admin-image.png' alt='Admin' />
                                </div>
                                <div>
                                    <h5 className="font-strong ">John Smith</h5>
                                    <div>
                                        <span className="admin-badge "> <FaRegEnvelope/> johnsmith@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="admin-menu-features">
                                <Link to={'/Profile'} className="admin-features-item"><i><FaUserAlt/></i>
                                    <span>PROFILE</span>
                                </Link>
                                <Link to={'/Settings'} className="admin-features-item"><i><FaRegSun/></i>
                                    <span>SETTINGS</span>
                                </Link>
                                <Link className="admin-features-item"><i><FaArrowRight/></i>
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
         </header>

    </>
  )
}

export default Header