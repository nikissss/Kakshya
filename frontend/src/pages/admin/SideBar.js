import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SideBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    const activeColor = 'black'; // Active icon color
    const inactiveColor = 'rgba(0, 0, 0, 0.54)'; // Inactive icon color (default MUI color)

    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon sx={{ color: location.pathname === "/" || location.pathname === "/Admin/dashboard" ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/classes">
                    <ListItemIcon>
                        <ClassOutlinedIcon sx={{ color: isActive("/Admin/classes") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Classes" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/subjects">
                    <ListItemIcon>
                        <AssignmentIcon sx={{ color: isActive("/Admin/subjects") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/teachers">
                    <ListItemIcon>
                        <SupervisorAccountOutlinedIcon sx={{ color: isActive("/Admin/teachers") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Teachers" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/students">
                    <ListItemIcon>
                        <PersonOutlineIcon sx={{ color: isActive("/Admin/students") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/notices">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon sx={{ color: isActive("/Admin/notices") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Notices" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/complains">
                    <ListItemIcon>
                        <ReportIcon sx={{ color: isActive("/Admin/complains") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Complains" />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <ListItemButton component={Link} to="/Admin/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon sx={{ color: isActive("/Admin/profile") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton component={Link} to="/logout">
                    <ListItemIcon>
                        <ExitToAppIcon sx={{ color: isActive("/logout") ? activeColor : inactiveColor }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    );
}

export default SideBar;
