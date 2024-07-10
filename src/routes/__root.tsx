import { createRootRoute, Link as RouterLink, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '@fontsource/inter';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Sheet } from '@mui/joy';
import '@fontsource/inter';

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <div>
                <CssVarsProvider>
                    <CssBaseline />
                    <Sheet sx={{ minWidth: "100vw", minHeight: "100vh" }}>                        
                        <Outlet />
                    </Sheet>
                </CssVarsProvider>
            </div>
            <TanStackRouterDevtools position="bottom-right" />
        </>
    )
}