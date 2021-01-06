import { Inertia } from "@inertiajs/inertia"
import { InertiaLink } from "@inertiajs/inertia-react"
import React, { Fragment, useState } from "react"
import Layout from "../../../components/common/layout"
import LatestPages from "../../../components/webpages/LatestPages"

const Add = ({ errors, webPages }) => {
  const [state, setState] = useState({
    link: "",
    title: "Some title",
    isLoading: false
  })

  const handleChange = e => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value })
    console.log(state.link)
  }

  const handleSubmit = e => {
    e.preventDefault()
    Inertia.post("/web-pages/preview", state, {
      onStart: () => {
        setState({ ...state, isLoading: true })
      },
      onFinish: () => {
        setState({ ...state, isLoading: false })
      }
    })
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
                  <button
                    className="btn btn-success ml-2 d-flex align-items-center justify-content-center"
                    type="submit"
                    disabled={state.isLoading}
                  >
                    {state.isLoading ? (
                      <div className="d-flex align-items-center">
                        <div
                          className="spinner-border text-white spinner-border-sm"
                          role="status"
                        >
                          <span className="visually-hidden"></span>
                        </div>
                        <span className="ml-2">Please wait...</span>
                      </div>
                    ) : (
                      "Add"
                    )}
                  </button>
                </div>
                <span className="text-danger">{errors && errors.link}</span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <LatestPages webPages={webPages} />
        </div>
      </div>
    </Layout>
  )
}

export default Add
