import '@fontsource/inter';
import { useColorScheme } from '@mui/joy/styles';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import { Link as RouterLink } from 'react-router-dom';
import ContrastIcon from '@mui/icons-material/Contrast';
import IconButton from '@mui/joy/IconButton';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';

function ModeToggle() {
    const { mode, setMode } = useColorScheme();

    return (
        <IconButton
            aria-label="Change theme"
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            <ContrastIcon />
        </IconButton >
    );
}


function Nav() {
    return (
        <>
            <List role="menubar" orientation="horizontal">
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component={RouterLink}
                        to="/"
                        aria-label="Home"
                    >
                        <Home />
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component={RouterLink} to="/docs">
                        Products
                    </ListItemButton>
                </ListItem>
                <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                    <ModeToggle />
                    <Dropdown>
                        <MenuButton
                        variant="plain"
                            role="menuitem"
                        >
                            <Person />
                        </MenuButton>
                        <Menu placement="bottom-end">
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </Dropdown>

                </ListItem>
            </List>

        </>
    )
}

export default Nav
