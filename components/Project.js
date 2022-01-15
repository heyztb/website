export default function Project({ name, description, url, repo }) {
  return (
    <div className="outline outline-1 outline-neutral-200 shadow-md rounded w-96 mx-auto">
      <div className="px-4 py-4">
        <div className="mb-2 border-b border-neutral-100 shadow-sm">
          <h2 className="text-2xl">{name}</h2>
        </div>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-2">
        <button className="h-12 bg-transparent outline outline-1 outline-neutral-200 hover:bg-neutral-100 hover:outline-neutral-300"><a href={url}>View project</a></button>
        <button className="h-12 bg-transparent outline outline-1 outline-neutral-200 hover:bg-neutral-100 hover:outline-neutral-300"><a href={repo}>View GitHub</a></button>
      </div>
    </div>
  )
}