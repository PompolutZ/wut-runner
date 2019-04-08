import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
    palette: {
        primary: {
            main: '#20B2AA',
        },

        secondary: {
            main: '#b24220'
        },

        typography: {
            useNextVariants: true,
        }
    }
}

export default createMuiTheme(theme);