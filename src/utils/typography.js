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
  "pre": {
    "margin-bottom": "34px",
  }
})

const typography = new Typography({...typographyConfig, ...overrides})

// Export helper functions
export const {scale, rhythm, options} = typography
export default typography
