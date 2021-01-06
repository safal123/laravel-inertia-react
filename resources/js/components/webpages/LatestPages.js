import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"

const LatestPages = ({ webPages }) => {
  return (
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
  )
}

export default LatestPages
