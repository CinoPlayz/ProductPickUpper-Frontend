import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import ErrorIcon from '@mui/icons-material/Error';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';

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
        <CssVarsProvider>          
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
                
              <Typography startDecorator={<ErrorIcon/>} level="h1" component="h1">
              Oops!
              </Typography>
              <Typography level="body-md">Sorry, an unexpected error has occurred.</Typography>
              <Typography level="body-xs"><i>{errorMessage}</i></Typography>
            </div>
           
  
  
          </Sheet>
        </CssVarsProvider>
      </>
    )
  }
  
  export default ErrorPage