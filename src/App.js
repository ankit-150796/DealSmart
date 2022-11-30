import './index.css';
import 'tippy.js/dist/tippy.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users.js";
import Deals from "./pages/Deals";
import Merchant from "./pages/Merchant";
import MerchantDetails from './pages/MerchantDetails';
import AddMerchant from './pages/AddMerchant';
import MerchantDeals from './pages/MerchantDeals';
import Discussion from "./pages/Discussion";
import DiscussionDetails from './pages/DiscussionDetails';
import AddDiscussion from './pages/AddDiscussion';
import Notification from "./pages/Notification";
import AddNotification from './pages/AddNotification';
import NotificationDetails from './pages/NotificationDetails';
import Groups from './pages/Groups';
import GroupsDetails from './pages/GroupsDetails';
import Reported from "./pages/Reported";
import ReportedDetails from './pages/ReportedDetails';
import Points from "./pages/Points";
import PointsDetails from './pages/PointsDetails';
import AddPoints from './pages/AddPoints';
import Rewards from './pages/Rewards';
import Admins from "./pages/Admins";
import AdminDetails from './pages/AdminDetails';
import AddAdmins from './pages/AddAdmins';
import UserDetails from './pages/UserDetails';
import DealsDetails from './pages/DealsDetails';
import MerchantDealsDetails from './pages/MerchantDealsDetails';
import { Profile } from './pages/Profile';
import Settings from './pages/Settings';


function App() {
  return (
    <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/UserDetails" element={<UserDetails />} />
            <Route path="/deals" element={<Deals />} /> 
            <Route path="/deals/DealsDetails" element={<DealsDetails />} />
            <Route path="/Merchant" element={<Merchant />} />
            <Route path="/AddMerchant" element={<AddMerchant />} />
            <Route path="/Merchant/MerchantDetails" element={<MerchantDetails />}/>
            <Route path="/Merchant/MerchantDetails/MerchantDeals" element={<MerchantDeals />} />
            <Route path="/Merchant/MerchantDetails/MerchantDeals/MerchantDealsDetails" element={<MerchantDealsDetails />} />
            <Route path="/Discussion" element={<Discussion />} />
            <Route path="/Discussion/DiscussionDetails" element={<DiscussionDetails />} />
            <Route path="/AddDiscussion" element={<AddDiscussion />} />
            <Route path="/Notification" element={<Notification/>} />
            <Route path="/AddNotification" element={<AddNotification/>} />
            <Route path="/Notification/NotificationDetails" element={<NotificationDetails/>} />
            <Route path="/Notification/NotificationDetails/Groups" element={<Groups />} />
            <Route path="/Notification/NotificationDetails/Groups/GroupsDetails" element={<GroupsDetails />} />
            <Route path="/Reported" element={<Reported/>} />
            <Route path="/Reported/ReportedDetails" element={<ReportedDetails/>} />
            <Route path="/Points" element={<Points/>} />
            <Route path="/AddPoints" element={<AddPoints/>} />
            <Route path="/Points/PointsDetails" element={<PointsDetails/>} />
            <Route path="/Points/PointsDetails/Rewards" element={<Rewards/>} />
            <Route path="/Admins" element={<Admins/>} />
            <Route path="/Admins/AdminDetails" element={<AdminDetails/>} />
            <Route path="AddAdmins" element={<AddAdmins/>} />
            <Route path="/SideBar" element={<SideBar/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Settings" element={<Settings/>} />

          </Routes>
        </SideBar>
    </Router>
  );
}

export default App;
