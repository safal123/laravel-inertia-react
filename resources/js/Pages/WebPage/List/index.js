import { InertiaLink } from "@inertiajs/inertia-react"
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
                  <div className="d-flex justify-content-between">
                    <InertiaLink href={`/web-pages/view/${page.id}`}>
                      {page.title}
                    </InertiaLink>
                    {/* <span>{page.is_active}</span> */}
                    <button className="btn btn-danger btn-sm">Remove</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default WebPageList
