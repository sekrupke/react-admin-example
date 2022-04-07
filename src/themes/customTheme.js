import red from '@material-ui/core/colors/red';
import {createTheme} from "@material-ui/core";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#5f5e5a'
        },
        secondary: {
            main: '#5f5e5a'
        },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
    overrides: {
        MuiButton: { // override the styles of all instances of this component
            root: { // Name of the rule
                backgroundColor: '#ffce04',
                border: '1px solid grey'
            },
        },
    },
});