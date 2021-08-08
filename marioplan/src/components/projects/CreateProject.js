import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { createProject } from "../../store/actions/projectActions"

const CreateProject = props => {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    props.createProject({ title, content })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3"></h5>
        <div className="input-field">
          <label htmlFor="title">title</label>
          <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">content</label>
          <textarea id="content" className="materialize-textarea" onChange={e => setContent(e.target.value)}></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
