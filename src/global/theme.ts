export interface Theme {
    colors: {
        white: string
        black: string
    }
}

const theme: Theme = {
    colors: {
        white: '#FFFFFF',
        black: '#000000'
    }
}

export type ThemeType = typeof theme
export default theme