/* First, gatsby-plugin-typography plugin needs to be installed and added to
the gatsby-config.js file, then `pathToConfigModule` pointed to this file.
*/
import Typography from "typography";
// Typography themes also need to be individually installed
import typographyTheme from "typography-theme-judah";

// modify theme
typographyTheme.baseFontSize = '18px'
// generate and export theme. Gatsby will automatically apply theme to header.
const typography = new Typography(typographyTheme);
export default typography;
