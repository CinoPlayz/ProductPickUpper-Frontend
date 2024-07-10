import ErrorIcon from '@mui/icons-material/Error';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import { Link as RouterLink } from '@tanstack/react-router'

function NotFound() {
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
            </List>
            <Sheet variant="outlined" sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }}>
                <div>

                    <Typography startDecorator={<ErrorIcon />} level="h1" component="h1">
                        Oops!
                    </Typography>
                    <Typography level="body-md">Sorry, this page could not be found.</Typography>
                    <Typography level="body-xs"><i>404 Not Found</i></Typography>
                </div>



            </Sheet>
        </>
    )
}

export default NotFound