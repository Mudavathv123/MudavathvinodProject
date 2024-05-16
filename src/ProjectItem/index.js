import './index.css'

const ProjectItem = props => {
  const {project} = props
  const {id, name, imageUrl} = project

  return (
    <li className="project-items">
      <img src={imageUrl} alt={name} className="project-img" />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectItem
