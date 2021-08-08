import React, { useEffect } from "react"
import { useParams } from "react-router"

const ProjectDetails = () => {
  const { id } = useParams()

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima sequi iusto dicta repellat ipsum. Nesciunt possimus quos temporibus eius, magnam totam nisi voluptate ex hic! Quam incidunt autem minima!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Yumiya</div>
          <div>2nd Septemmber, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
