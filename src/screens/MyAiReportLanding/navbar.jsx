import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PaypalButton from './paypalFunctionality';

const drawerWidth = 240;
const navItems = ['Sample Report 1', 'Sample Report 2', 'Contact Us'];

export function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <a
                href="https://myaireport.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://c.animaapp.com/TYQOTS8E/img/image-3@2x.png"
                    alt="Logo"
                    style={{ width: 160, height: 49 }}
                />
            </a>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            {/* <CssBaseline /> */}
            <AppBar sx={{ backgroundColor: 'white',display:'flex' }}>
                <Toolbar
                sx={{
                    display:'flex',
                    justifyContent:'space-between'
                }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <a
                        href="https://myaireport.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://c.animaapp.com/TYQOTS8E/img/image-3@2x.png"
                            alt="Logo"
                            style={{ width: 160, height: 49 }}
                        />
                    </a>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' },width:'30%',alignItems:'center',justifyContent:'space-between'}}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#000000' }}
                                onClick={() => {
                                    if (item === 'Contact Us') {
                                        props.scrollToContactUs();
                                    }
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                        <Button sx={{display:{xs:'none',sm:'block'}}}>
                            <PaypalButton />
                        </Button>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}