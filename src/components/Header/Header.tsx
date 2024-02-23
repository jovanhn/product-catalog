import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import pages from "../../routes/RoutesList.tsx";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { blueGrey } from '@mui/material/colors';

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Display: MD */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            flexGrow: 1,
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            alignItems: 'center',
                        }}
                    >
                        <Link
                            to={"/"}
                            style={{display: "flex", textDecoration: "none", color: "inherit", alignItems: "center"}}
                        >
                            <Avatar sx={{display: {xs: 'none', md: 'flex'}}} alt="logo" src="shopping.svg"/>
                            <Box sx={{ p: 3 }}> Product Catalog </Box>
                        </Link>
                    </Typography>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((link) => (
                            <Link key={link.path} to={link.path} style={{color: "white", textDecoration: "none"}}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* Display: XS */}
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((link) => (
                                <Link key={link.path} to={link.path} style={{color: "black", textDecoration: "none"}}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        {link.name}
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: 'center',
                        }}
                    >
                        <Link
                            to={"/"}
                            style={{display: "flex", textDecoration: "none", color: "inherit", alignItems: "center"}}
                        >
                            <Avatar alt="A" src="shopping.svg"> </Avatar>
                            <Box sx={{ p: 1 }}> Product Catalog </Box>
                        </Link>
                    </Typography>

                    {/* Display: Always */}
                    <Box sx={{ml: {xs: 0, md: 5}}}>
                        <Avatar sx={{ bgcolor: blueGrey[500] }}>
                            <AccountCircleIcon />
                        </Avatar>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}