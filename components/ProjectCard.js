import ProjectButton from "./ProjectButton"
export default function ProjectCard({ name, description, url, repo }) {
  return (
    <div className="outline outline-1 outline-neutral-200 shadow-md rounded w-96 mx-auto">
      <div className="px-4 py-4">
        <div className="mb-2 border-b border-neutral-100 shadow-sm">
          <h2 className="text-2xl">{name}</h2>
        </div>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-2">
        <ProjectButton href={url} text="View project" />
        <ProjectButton href={repo} text="View GitHub" />
      </div>
    </div>
  )
}