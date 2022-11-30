import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaBox, FaRadiationAlt, FaUserTie,FaVolumeDown, FaMarker, FaTree, FaUserPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const SideBar = ({children}) => {
    const[isOpen] = useState(true);

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaHome/>
        },
        {
            path:"/Users",
            name:"Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/Deals",
            name:"Deals",
            icon:<FaBox/>
        },
        {
            path:"/Merchant",
            name:"Merchant",
            icon:<FaRadiationAlt/>
        },
        {
            path:"/Discussion",
            name:"Discussion",
            icon:<FaUserTie/>
        },
        {
            path:"/Notification",
            name:"Notification",
            icon:<FaVolumeDown/>
        },
        {
            path:"/Reported",
            name:"Reported",
            icon:<FaMarker/>
        },
        {
            path:"/Points",
            name:"Points",
            icon:<FaTree/>
        },
        {
            path:"/Admins",
            name:"Admins",
            icon:<FaUserPlus/>
      }
  

    ]
    return (
        <>
           <div style={{width: isOpen ? "230px" : "60px"}} className="page-sidebar">
                
               {
                   menuItem.map((item, index)=>(
                      <ul className='side-menu'>
                          <li>
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <i className=" sidebar-item-icon ">{item.icon}</i>
                                <div style={{display: isOpen ? "block" : "none"}} className="nav-label">{item.name}</div>
                            </NavLink>
                          </li>
                       </ul>
                   ))
               }
           </div>
           <main>{children}</main>
        </>
    );
};

export default SideBar