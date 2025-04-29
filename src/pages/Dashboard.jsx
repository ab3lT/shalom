// src/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import { AppBar, Box, CssBaseline, Toolbar, Typography, Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SidebarDrawer, { drawerWidth } from '../components/SidebarDrawer';

export default function Dashboard(props) {
    const { window } = props;
    const { user, logout } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SidebarDrawer
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                container={container}
            />

            {/* Main area with column layout */}
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            Shalom Spa Dashboard
                        </Typography>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Toolbar>
                </AppBar>

                <Toolbar /> {/* This offsets the AppBar height */}

                <Container sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to Shalom Spa, {user?.userName}!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Use the navigation menu to access your bookings and change your password.
                    </Typography>
                </Container>

                {/* Sticky Footer */}
                <Box
                    component="footer"
                    sx={{
                        p: 2,
                        backgroundColor: '#4066EBFF',
                        textAlign: 'center',
                        mt: 'auto',
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Shalom Spa. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
