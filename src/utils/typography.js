import Typography from "typography"
import typographyConfig from "typography-theme-us-web-design-standards"

const overrides = {
  googleFonts: [
    {
      name: "Raleway",
      styles: ["700"],
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700"],
    }
  ],
  headerFontFamily: ["Raleway", "serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
}

typographyConfig.overrideThemeStyles = () => ({
  "h2": {"color": "#38a169"},
  "h3": {"color": "#38a169"},
  "h4": {"color": "#38a169"},
  "h5": {"color": "#38a169"},
  "h6": {"color": "#38a169"},
  "pre": {
    "margin-bottom": "34px",
  }
})

const typography = new Typography({...typographyConfig, ...overrides})

// Export helper functions
export const {scale, rhythm, options} = typography
export default typography
