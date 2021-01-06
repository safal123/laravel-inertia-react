import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"

const WebPageListItems = ({ page }) => {
  return (
    <div className="row">
      <li className="list-group-item d-flex">
        <div className="col-md-2">
          <img src={page.image_url} alt="" width="100%" height="100%" />
        </div>
        <div className="col-md-10">
          <div className="d-flex justify-content-between align-content-center">
            <div>
              <InertiaLink href={`/web-pages/view/${page.id}`}>
                {page.title}
              </InertiaLink>
              <p>{page.description}</p>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}

export default WebPageListItems
