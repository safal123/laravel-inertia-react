import { Inertia } from "@inertiajs/inertia"
import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"
import Layout from "../../../components/common/layout"
import LatestPages from "../../../components/webpages/LatestPages"

const View = ({ webpage, webPages }) => {
  const handleClick = e => {
    e.preventDefault()
    Inertia.post("/web-pages/make-active", { id: webpage.id })
  }
  const handleDelete = e => {
    e.preventDefault()
    Inertia.post("/web-pages/delete", { id: webpage.id })
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-content-center">
              {webpage.title}
              <form onSubmit={handleDelete}>
                <button type="submit" className="ml-auto btn btn-danger btn-sm">
                  Delete
                </button>
              </form>
            </div>
            <div className="card-body">
              <div className="card-title">{webpage.description}</div>
              <img src={webpage.image_url} alt={webpage.title} width="100%" />
              <div className="d-flex justify-content-between mt-2">
                <a href={webpage.url} className="btn btn-info " target="_blank">
                  View page
                </a>
                {webpage.is_active !== "1" ? (
                  <button className="btn btn-success" onClick={handleClick}>
                    Save
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <LatestPages webPages={webPages} />
        </div>
      </div>
    </Layout>
  )
}

export default View
