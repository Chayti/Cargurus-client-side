import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logout, admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/home"><Button style={{ color: "#89a077" }}>Home</Button></Link>
            <br />
            <Link to="/products"><Button style={{ color: "#89a077" }}>Products</Button></Link>
            <br />
            {
                !admin && <Box>
                    <Link to={`${url}/payment`}><Button style={{ color: "#89a077" }}>Payment</Button></Link>
                    <br />
                    <Link to={`${url}/myOrders`}><Button style={{ color: "#89a077" }}>My Orders</Button></Link>
                    <br />
                    <Link to={`${url}/addReview`}><Button style={{ color: "#89a077" }}>Add Review</Button></Link>
                </Box>
            }

            {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`}><Button style={{ color: "#89a077" }}>Make Admin</Button></Link>
                    <Link to={`${url}/addProduct`}><Button style={{ color: "#89a077" }}>Add A Product</Button></Link>
                    <Link to={`${url}/manageOrder`}><Button style={{ color: "#89a077" }}>Manage all Orders</Button></Link>
                    <Link to={`${url}/manageProduct`}><Button style={{ color: "#89a077" }}>Manage All Products</Button></Link>
                </Box>
            }
            {
                user.email
                    ? <button onClick={logout} className="btn border-0 ms-2"><FontAwesomeIcon icon={faSignOutAlt} size="1x" />&nbsp;Log out</button>
                    : <p></p>
            }
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hello, {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
