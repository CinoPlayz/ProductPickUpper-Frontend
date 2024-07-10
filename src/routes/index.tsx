import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Sheet from '@mui/joy/Sheet';
import { Link as RouterLink } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router'
import Nav from '../components/Nav';

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return (
        <>
            <Nav />
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
                <Typography level="h3" component="h4">
                    Welcome!
                </Typography>
                <Typography level="body-md">
                    In order to use the application you need to have an account.
                </Typography>
                <Typography
                    startDecorator={<Link component={RouterLink} to="/login">Login</Link>}
                    fontSize="sm"
                    level="body-sm"
                    sx={{ alignSelf: 'center' }}
                >
                    to continue.</Typography>



            </Sheet>
        </>
    )
}

export default Home
