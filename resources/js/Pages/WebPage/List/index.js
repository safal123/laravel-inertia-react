import React from "react"
import Layout from "../../../components/common/layout"

const WebPageList = ({ webPages }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <ul className="list-group">
            {webPages &&
              webPages.map((page, index) => (
                <li className="list-group-item" key={index}>
                  {page.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default WebPageList
