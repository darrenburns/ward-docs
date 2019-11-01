import Typography from "typography"
import typographyConfig from "typography-theme-us-web-design-standards"

const overrides = {

}

typographyConfig.overrideThemeStyles = () => ({

})

const typography = new Typography({...typographyConfig, ...overrides})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
