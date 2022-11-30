import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import {FaHome, FaPencilAlt} from 'react-icons/fa';

export const Profile = () => {
  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}> <FaHome/> </Link>
                    </li>
                    <li className="breadcrumb-item">Profile</li> 
                </ol>
            </div>
            <div className="page-content fade-in-up">
                <div className="ibox ibox-fullheight">
                    <div className="ibox-head">
                        <div className="ibox-title services_name"><span>Profile Detail</span></div>
                    </div>
                    <div className="ibox-body">
                        <div className="col-bx-top">
                            <form>
                                <div className="form-group">
                                    <div className="profile-upload">
                                        <div className="proEdit">
                                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                            <label id="imageUpload"><i><FaPencilAlt/></i></label>
                                        </div>
                                        <div className="avatar-preview">
                                            <div id="imagePreview">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>First Name<i className="required">*</i></label>
                                    <input className="form-control" type="text" placeholder="Enter"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name<i className="required">*</i></label>
                                    <input className="form-control" type="text" placeholder="Enter"/> 
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
