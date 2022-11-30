import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaHome, FaCamera } from 'react-icons/fa';

const AddDiscussion = () => {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <>
        <Header/>
        <div className="content-wrapper table-full-bx">
            <div className="page-heading">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}><FaHome/> </Link>
                    </li>
                    <li className="breadcrumb-item"><h1 className="page-title"> <Link to={'/Discussion'}>Discussion</Link> </h1></li>
                    <li className="breadcrumb-item"><h1 className="page-title"> Add Discussion </h1></li>
                </ol>
            </div>

            <div className="fade-in-up ibox">
                <div className="ibox-title"><span>Merchant Info</span></div>
                <div className="ibox-body">
                    <div className="col-bx-top">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="avatar-upload">
                                            <div className="avatar-edit">
                                                <input type="file" onChange={handleChange} />
                                                <label id="imageUpload"><FaCamera/></label>
                                            </div>
                                            <div className="avatar-preview">
                                                <img src={file} id="imagePreview" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Title </label>
                                        <input className="form-control" type="text" placeholder="Enter" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label>Forum name</label>
                                            <select className="form-control">
                                                 <option>Lorem Ipsum</option>
                                                 <option>Lorem Ipsum</option>
                                                 <option>Lorem Ipsum</option>
                                             </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                        <div className="form-group">
                                             <label>Description </label>
                                            <textarea className="form-control"></textarea>
                                        </div> 
                                    </div>
                                <div className="col-md-12">
                                    <div className="form-group buttons">
                                    <input value="Done" name="" className="common-btn" type="submit"/>
                                </div>
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

export default AddDiscussion