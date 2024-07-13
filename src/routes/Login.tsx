import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from '@mui/joy/Button';
import { createFileRoute } from '@tanstack/react-router'
import Nav from '../components/Nav';
import FormHelperText from '@mui/joy/FormHelperText';
import { InfoOutlined } from '@mui/icons-material';

export const Route = createFileRoute('/login')({
    component: Login,
})

interface LoginFormInput {
    email: string;
    password: string;
}

function Login() {

    const { control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<LoginFormInput> = data => {
        console.log(data)
    };


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
                <div>
                    <Typography level="h4" component="h1">
                        Welcome!
                    </Typography>
                    <Typography level="body-sm">Sign in to continue.</Typography>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl {...errors.email?.type === "required" && { error: true }}>
                        <FormLabel>Email</FormLabel>
                        <Controller
                            name="email"
                            rules={{ required: true }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder='johndoe@email.com' type='email' />}
                        />
                        {errors.email?.type === "required" &&
                            (<FormHelperText>
                                <InfoOutlined />
                                Required
                            </FormHelperText>)
                        }

                    </FormControl>
                    <FormControl {...errors.password?.type === "required" && { error: true }}>
                        <FormLabel>Password</FormLabel>
                        <Controller
                            name="password"
                            rules={{ required: true }}
                            control={control}
                            render={({ field }) => <Input {...field} placeholder='password' type='password' />}
                        />
                        {errors.password?.type === "required" &&
                            (<FormHelperText>
                                <InfoOutlined />
                                Required
                            </FormHelperText>)
                        }
                    </FormControl>
                    <Button sx={{ mt: 1 /* margin top */ }} type='submit'>
                        Log in
                    </Button>
                </form>
            </Sheet>
        </>
    )
}

export default Login

