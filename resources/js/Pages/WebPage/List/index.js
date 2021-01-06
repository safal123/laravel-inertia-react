import React from "react"
import Layout from "../../../components/common/layout"
import LatestPages from "../../../components/webpages/LatestPages"
import WebPageListItems from "../../../components/webpages/WebPageListItems"

const WebPageList = ({ webPages }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <ul className="list-group">
            {webPages &&
              webPages.map((page, index) => (
                <WebPageListItems key={index} page={page} />
              ))}
          </ul>
        </div>
        <div className="col-md-4">
          <LatestPages webPages={webPages} />
        </div>
      </div>
    </Layout>
  )
}

export default WebPageList
