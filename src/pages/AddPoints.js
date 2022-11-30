import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const AddPoints = () => {

  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}><FaHome/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> <Link to={'/Admins'}> Points </Link> </h1></li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Add Points </h1></li>
                </ol>
            </div>

            <div className="fade-in-up ibox">
                <div className="ibox-title"><span> Rewards & Points </span></div>
                <div className="ibox-body">
                    <div className="col-bx-top">
                        <form>
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Discount(%)</label>
                                        <input className="form-control" type="text" placeholder="Enter" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Coupon Code</label>
                                        <input className="form-control" type="text" placeholder="Enter" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label>Valid From</label>
                                                <input class="form-control" type="date" placeholder="From" id="inputDate"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label>Valid To</label>
                                                <input class="form-control" type="date" placeholder="To" id="inputDate"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <input className="form-control" type="text" placeholder="Enter" />
                                    </div>
                                </div>
                                <div className="form-group buttons">
                                    <input value="Done" name="" className="common-btn" type="submit" />
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

export default AddPoints