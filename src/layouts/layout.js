import {css} from 'glamor'

export const Page = {
  // The full-width outer column element
  Margin: css({
    // stretch body vertically for sticky footer
    flex: '1 0 auto',
  }),
  // Centered on the page within Margin, lines up with Header/Footer
  Container: css({
    margin: '0 auto', // generates extra space around content
    maxWidth: 1500, // width to fit 2 images in a row
    padding: '0px 1.0875rem 1.45rem', // sets minimum space around content
  }),
  // Holds Header, Content, and Footer. Needed for Sticky Footer
  OuterColumn: css({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch', // stretch items horizontally
  }),
}

export const HeaderCSS = {
  Background: css({
    background: 'black',
    marginBottom: '1.45rem',
    flex: '0 0 auto'
  }),
  Container: css(Page.Container, {
    padding: '1rem 1.0875rem',
  }),
}

export const Footer = {
  Background: css({
    background: 'black',
    flexShrink: 0
  }),
  List: css({
    margin: 0,
    padding: 0
  }),
  Item: css({
    color: 'white',
    display: 'inline-block',
    listStyleType: 'none',
    margin: '0 1rem 0 0',
  }),
  Link: css({
    color: 'white',
    ':hover': {
      color: 'grey'
    }
  }),
}

export const MiddleOuter = css({
  flex: '1 0 auto',
  backgroundColor: 'yellow'
})

const Style = {
  HeaderCSS,
  Footer,
  Page
}

export default Style;
