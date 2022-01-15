import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/profile.jpg';
import Project from '../components/Project';
import projectList from '../projects.json';
export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>ztb</title>
        <meta name="description" content="my portfolio for the year two thousand and twenty-two" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-full w-full bg-neutral-50">
          <div className='md:pt-10 mx-auto space-y-6'>
            <div className="mx-auto pt-6 md:pt-0 w-72 md:w-36 md:h-auto">
              <Image src={profilePic} alt="a picture of me" className='rounded'/>
            </div>
            <h1 className='text-6xl md:text-5xl text-center'>hi, my name is zach</h1>
            <p className='text-2xl text-center'>i&apos;m building things for web3</p>
            <div className="text-center space-x-12">
              <a className='underline underline-offset-4' href="https://github.com/heyztb" target="_blank" rel="noreferrer">
                github
              </a>
              <a className='underline underline-offset-4' href="https://ztb.hashnode.dev" target="_blank" rel="noreferrer">
                blog
              </a>
              <a className='underline underline-offset-4' href="https://twitter.com/heyztb" target="_blank" rel="noreferrer">
                twitter
              </a>
            </div>
          </div>
          <div className="pt-10 mx-auto w-[66%] border-b shadow-neutral-50 shadow-sm"></div>
          <div className='pt-10 pb-10 w-full grid grid-cols-1 space-y-6'>
            {projects.map((project) => {
              return (
                <Project key={project.id} name={project.name} description={project.description} url={project.url} repo={project.repo} />
              )
            })}
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  return { props: { projects: projectList.projects }}
}
