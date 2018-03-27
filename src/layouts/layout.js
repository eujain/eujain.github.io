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

// Shared between Header and Footer
export const Nav = {
  Background: css({
    background: 'black',
    flex: '0 0 auto',
  }),
  Container: css(Page.Container, {
    padding: '1rem 1.0875rem',
  }),
  List: css({
    margin: 0,
    padding: 0
  }),
  Item: css({
    color: 'white',
    display: 'inline-block',
    listStyleType: 'none',
    margin: '0 1rem 0 0'
  }),
  // activeStyle prop takes object, activeClassName not working!
  Active: {
    color: 'yellow'
  },
  Link: css({
    color: 'white',
    textDecoration: 'none',
    ':hover': {
      color: 'grey'
    },
  }),
}

export const Header = {
  Background: css(Nav.Background, {
    marginBottom: '1.45rem',
  }),
}

export const MiddleOuter = css({
  flex: '1 0 auto',
  backgroundColor: 'yellow'
})

const Style = {
  Header,
  Page,
  Nav,
}

export default Style;
