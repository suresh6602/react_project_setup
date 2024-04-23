import { Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import routes from './route';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

const App = () => {
    const queryClient = new QueryClient();
    return (
        <Grid>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={routes} />
                </ThemeProvider>
            </QueryClientProvider>
        </Grid>
    );
};
export default App;
