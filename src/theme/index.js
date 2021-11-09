import { createTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: colors.indigo['A400'],
        },
        secondary: {
            main: colors.orange['A700'],
        },
    },
    typography: {
        h5: {
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: '-0.05px',
        },
    },

})

export default theme;