import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/footer'
import './index.css'
import {PageContainer, Page} from './layout'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Porfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div {...Page.OuterColumn}>
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
