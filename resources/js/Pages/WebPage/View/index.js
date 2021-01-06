import { Inertia } from "@inertiajs/inertia"
import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"
import Layout from "../../../components/common/layout"

const View = ({ webpage, webPages }) => {
  const handleClick = e => {
    e.preventDefault()
    Inertia.post("/web-pages/make-active", { id: webpage.id })
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">{webpage.title}</div>
            <div className="card-body">
              <div className="card-title">{webpage.description}</div>
              <img src={webpage.image_url} alt={webpage.title} width="100%" />
              <div className="d-flex justify-content-between mt-2">
                <a href={webpage.url} className="btn btn-info " target="_blank">
                  View page
                </a>
                <button className="btn btn-success" onClick={handleClick}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Latest webpages</div>
            <div className="card-body">
              <ul className="list-group">
                {webPages &&
                  webPages.map((page, index) => (
                    <li className="list-group-item" key={index}>
                      <div className="d-flex justify-content-between">
                        <InertiaLink href={`/web-pages/view/${page.id}`}>
                          {page.title}
                        </InertiaLink>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default View
