import {AppBar} from "react-admin";
import {Box, Typography} from "@mui/material";
import Logo from "./logo";

const CustomAppBar = (props) => (
    <AppBar {...props} >
        <Typography
            variant="h6"
            color="inherit"
            id="react-admin-title"
        />
        <Box component="span" sx={{ flex: 1 }} />
        <Logo />
        <Box component="span" sx={{ flex: 1 }} />
    </AppBar>
)

export default CustomAppBar;