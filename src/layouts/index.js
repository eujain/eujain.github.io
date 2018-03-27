import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/footer'
import './index.css'
import {PageContainer, Page} from './layout'

const style = {
  outer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Porfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div css={style.outer}>
      <Header />
      <div {...Page.Margin}>
        <div {...Page.Container}>
          {children()}
        </div>
      </div>
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
