import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#659DBD`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={headerStyles.title}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
