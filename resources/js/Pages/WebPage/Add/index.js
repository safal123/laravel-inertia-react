import { Inertia } from "@inertiajs/inertia"
import { InertiaLink } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import Layout from "../../../components/common/layout"

const Add = ({ errors, webPages }) => {
  const [state, setState] = useState({
    link: "",
    title: "Some title"
  })

  const handleChange = e => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value })
    console.log(state.link)
  }

  const handleSubmit = e => {
    e.preventDefault()
    Inertia.post("/web-pages/preview", state)
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header">Add new webpage</div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-fill">
                    <input
                      type="text"
                      className="form-control"
                      name="link"
                      id="link"
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-success ml-2" type="submit">
                    Add
                  </button>
                </div>
                <span className="text-danger">{errors && errors.link}</span>
              </div>
            </div>
          </form>
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
                        {/* <button className="btn btn-danger btn-sm">
                          Remove
                        </button> */}
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

export default Add
