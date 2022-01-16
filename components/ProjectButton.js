export default function ProjectButton({ href, text }) {
  return ( 
    <button className="h-12 bg-transparent outline outline-1 outline-neutral-200 hover:bg-neutral-100 hover:outline-neutral-300"><a href={href} target="_blank" rel="noreferrer">{text}</a></button>
  )
}