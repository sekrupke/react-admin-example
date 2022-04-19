import red from '@mui/material/colors/red';
import {createTheme} from "@mui/material";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#6f5e5a',
        },
        secondary: {
            main: '#6f5e5a'
        },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
    components: {
        MuiButton: { // override the styles of all instances of this component
            styleOverrides: {
                root: { // Name of the rule
                    backgroundColor: '#facea4',
                    border: '1px solid grey'
                },
            },
        },
    },
});