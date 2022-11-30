import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const AddNotification = () => {

  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}><FaHome/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> <Link to={'/Notification'}> Notification </Link> </h1></li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Add Notification </h1></li>
                </ol>
            </div>

            <div className="page-content fade-in-up">
                <div className="ibox ibox-fullheight">
                    <div className="ibox-head">
                        <div className="ibox-title services_name"><span>Notification </span></div>
                    </div>
                    <div className="ibox-body">
                        <div className="col-bx-top">
                            <div className="formFiletr">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="file-input">Announcement link</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Notification Content</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Users</label>
                                    <ul className="row">
                                        <li className="col-md-4">
                                            <label className="checkbox individual"><input type="radio" name="status" /><i className="input-helper"></i>Individual</label>
                                        </li>
                                        <li className="col-md-4">
                                            <label className="checkbox leftlabel"><input type="radio" name="status" /><i className="input-helper"></i>All Users </label>
                                        </li>
                                        <li className="col-md-4">
                                            <label className="checkbox group"><input type="radio" name="status" /><i className="input-helper"></i>Groups</label>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="form-group buttons">
                                    <input value="Done" name="" className="common-btn" type="submit" />
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

export default AddNotification