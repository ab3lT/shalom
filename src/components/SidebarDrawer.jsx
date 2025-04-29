// src/components/SidebarDrawer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    ListItemIcon,
    Collapse,
    IconButton,
    Box,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LockIcon from '@mui/icons-material/Lock';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TodayIcon from '@mui/icons-material/Today';
import HistoryIcon from '@mui/icons-material/History';
import { Home } from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const SidebarDrawer = ({ mobileOpen, handleDrawerToggle, container }) => {
    const [openBookings, setOpenBookings] = React.useState(false);
    const [openBranch, setOpenBranch] = React.useState(false);
    const [openAward, setOpenAward] = React.useState(false);
    const [openServices, setOpenServices] = React.useState(false);
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const drawerWidth = isCollapsed ? 60 : 240;

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const renderListItem = (to, icon, label) => (
        <ListItem disablePadding>
            <ListItemButton component={Link} to={to} sx={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 0, mr: isCollapsed ? 'auto' : 2, justifyContent: 'center' }}>
                    {icon}
                </ListItemIcon>
                {!isCollapsed && <ListItemText primary={label} />}
            </ListItemButton>
        </ListItem>
    );

    const drawer = (
        <div>
            <Toolbar>
                <IconButton onClick={toggleCollapse}>
                    <MenuIcon />
                </IconButton>
                {!isCollapsed && <Typography variant="h6" sx={{ ml: 2 }}>Shalom Therapy </Typography>}
            </Toolbar>
            <Divider />
            <List>

                {renderListItem('/Dashboard', <Home />, 'Dashboard')}

                {/* Bookings */}
                <ListItemButton onClick={() => setOpenBookings(!openBookings)} sx={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: isCollapsed ? 'auto' : 2, justifyContent: 'center' }}>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    {!isCollapsed && <ListItemText primary="Bookings" />}
                    {!isCollapsed && (openBookings ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={openBookings && !isCollapsed} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {renderListItem('/bookings/today', <TodayIcon />, "Today's Bookings")}
                        {renderListItem('/bookings/history', <HistoryIcon />, 'Booking History')}
                    </List>
                </Collapse>

                {/* Branch */}
                <ListItemButton onClick={() => setOpenBranch(!openBranch)} sx={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: isCollapsed ? 'auto' : 2, justifyContent: 'center' }}>
                        <Home />
                    </ListItemIcon>
                    {!isCollapsed && <ListItemText primary="Branch" />}
                    {!isCollapsed && (openBranch ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={openBranch && !isCollapsed} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {renderListItem('/branches/view', <TodayIcon />, 'Branch')}
                        {renderListItem('/branches/manage', <HistoryIcon />, 'Branch Management')}
                        <ListItemButton onClick={() => setOpenServices(!openServices)} sx={{ pl: isCollapsed ? 1 : 4 }}>
                            <ListItemIcon><CalendarMonthIcon /></ListItemIcon>
                            {!isCollapsed && <ListItemText primary="Services" />}
                            {!isCollapsed && (openServices ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>
                        <Collapse in={openServices && !isCollapsed} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {renderListItem('/services/view', <TodayIcon />, 'Services')}
                                {renderListItem('/services/branch', <HistoryIcon />, 'Branch Services')}
                            </List>
                        </Collapse>
                    </List>
                </Collapse>

                {/* Award */}
                <ListItemButton onClick={() => setOpenAward(!openAward)} sx={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: isCollapsed ? 'auto' : 2, justifyContent: 'center' }}>
                        <EmojiEventsIcon />
                    </ListItemIcon>
                    {!isCollapsed && <ListItemText primary="Award" />}
                    {!isCollapsed && (openAward ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={openAward && !isCollapsed} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {renderListItem('/awards/manage', <TodayIcon />, 'Award Management')}
                        {renderListItem('/awards/history', <HistoryIcon />, 'Award History')}
                    </List>
                </Collapse>

                {/* Change Password */}
                {renderListItem('/change-password', <LockIcon />, 'Change Password')}
            </List>
        </div>
    );

    return (
        <>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
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
        </>
    );
};

export default SidebarDrawer;
export const drawerWidth = 240;