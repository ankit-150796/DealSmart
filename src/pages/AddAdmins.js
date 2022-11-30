import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const AddAdmins = () => {

  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}><FaHome/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> <Link to={'/Admins'}> Admin </Link> </h1></li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Add Admin </h1></li>
                </ol>
            </div>

            <div className="fade-in-up ibox">
    <div className="ibox-title"><span>Admin Info</span></div>
    <div className="ibox-body">
        <div className="col-bx-top">
            <form>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label>First Name<i className="required">*</i></label>
                                    <input className="form-control" type="text" placeholder="Enter" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label>Last Name<i className="required">*</i></label>
                                    <input className="form-control" type="text" placeholder="Enter" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label>Email<i className="required">*</i></label>
                                    <input className="form-control" type="text" placeholder="Enter" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-12 hide-btn">
                                <div className="form-group">
                                    <label>Activity log<i className="required">*</i></label>
                                    <select className="form-control">
                                        <option>Mods</option>
                                        <option>Sub Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>Access Options</label>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Dashboard</label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Reward Points</label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Sent Notification</label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>User</label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Deals</label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Merchant</label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Discussion </label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Reported Item </label>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <label className="checkbox leftlabel"><input type="checkbox" name="status" /><i className="input-helper"></i>Sub Admin </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group buttons">
                        <input value="Done" name="" className="common-btn" type="submit" onclick="add_service()" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

        </div>

    </>
  )
}

export default AddAdmins