import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Login, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
function Sidebar() {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">
                Master Admin
                
            </span>
            </Link>
        </div>
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashbord</span>
                </li>
                <p className="title">List</p>
                <Link to="/users" style={{textDecoration:"none"}}>

                <li>
                    <Person2OutlinedIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>

                <li>
                    <AddShoppingCartIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
                
              
                <li>
                <ShoppingBasketIcon className='icon'/>
                    <span>Orders</span>
                
            </li>
            
            
    
                <li>
                <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">Usefull</p>

                <li>
                <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">Services</p>

                <li>
                    <SystemSecurityUpdateGoodIcon className='icon'/>
                    <span>System health</span>
                </li>
                <li>
                    <PsychologyAltOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">Users</p>

                <li>
                    <Person className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <Login className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            

        </div>

    </div>
  )
}

export default Sidebar