import React, { Fragment } from "react"
import Menu from "../nav"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="mb-3">
        <Menu />
      </div>
      <div className="container">{children}</div>
      <div className="mt-3 p-2">
        <p style={{ textAlign: "center" }}>Copyright &copy; 2021</p>
      </div>
    </Fragment>
  )
}

export default Layout
