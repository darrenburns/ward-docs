import Typography from "typography"
import typographyConfig from "typography-theme-us-web-design-standards"

const overrides = {

}

typographyConfig.overrideThemeStyles = () => ({
      a: {
        color: "#d6d6d6"
      },
      "a:visited": {
        color: "#D6D6D6"
      },
})

const typography = new Typography({...typographyConfig, ...overrides})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
