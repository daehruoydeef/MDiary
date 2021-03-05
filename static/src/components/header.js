import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header style={{}}>
    <div
      style={{
        margin: `0 auto`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ background: "black", height: "0.5rem", width: "100%" }} />
      <Link to="/" style={{ maxWidth: "150px" }}>
        <Logo style={{ width: "50px", height: "50px", margin: "2rem" }} />
      </Link>
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
