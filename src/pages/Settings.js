import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

const Settings = () => {
  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}> <FaHome/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title">Settings</h1></li> 
                </ol>
            </div>
            <div className="page-content fade-in-up">
                <div className="ibox ibox-fullheight">
                    <div className="ibox-head">
                        <div className="ibox-title services_name"><span>Setting Details</span></div>
                    </div>
                    <div className="ibox-body">
                        <div className="col-bx-top">
                            <form>
                                <div className="form-group">
                                    <label>Old Password<i className="required">*</i></label>
                                    <input className="form-control" type="Password" placeholder="Enter"/> 
                                </div>
                                <div className="form-group">
                                    <label>New Password<i className="required">*</i></label>
                                    <input className="form-control" type="Password" placeholder="Enter"/> 
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password<i className="required">*</i></label>
                                    <input className="form-control" type="Password" placeholder="Enter"/>
                                </div>
                                <div className="form-group buttons">
                                    <input value="Done" name="" className="common-btn" type="submit"/> 
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings