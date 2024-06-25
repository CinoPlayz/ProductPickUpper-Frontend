import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import App from '../App';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';


function ErrorPage() {
    const error = useRouteError();
    let errorMessage = "";

    if (isRouteErrorResponse(error)) {
        errorMessage = error.status + " " + error.statusText;
    }
    else {
        errorMessage = "Unkown error";
    }

    return (
        <>
            <App>
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
                        <Typography level="body-md">Sorry, an unexpected error has occurred.</Typography>
                        <Typography level="body-xs"><i>{errorMessage}</i></Typography>
                    </div>



                </Sheet>
            </App>
        </>
    )
}

export default ErrorPage