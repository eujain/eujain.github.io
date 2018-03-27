import {css} from 'glamor'

export const Page = {
  // The full-width outer element
  Margin: css({
    flex: '1 0 auto'
  }),
  // Centered on the page within Margin, lines up with Header/Footer
  Container: css({
    margin: '0 auto',
    maxWidth: 1500,
    padding: '0px 1.0875rem 1.45rem',
  })
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

export const FooterCSS = {
  Link: css({
    color: 'white',
    ':hover': {
      color: 'grey'
    }
  })
}

export const MiddleOuter = css({
  flex: '1 0 auto',
  backgroundColor: 'yellow'
})
