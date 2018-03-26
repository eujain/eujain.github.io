import {css} from 'glamor'

export const PageContainer = css({
  margin: '0 auto',
  maxWidth: 1500,
  padding: '0px 1.0875rem 1.45rem',
})

export const HeaderCSS = {
  Background: css({
    background: 'black',
    marginBottom: '1.45rem',
  }),
  Container: css(PageContainer, {
    padding: '1rem 1.0875rem',
  }),
}
