import Head from "next/head"
import Image from "next/image"
import profilePic from "../public/profile.jpg"
import MenuBar from "../components/MenuBar"
import SideLinksList from "../components/SideLinksList"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      <Head>
        <title>ztb</title>
        <meta
          name="description"
          content="my portfolio for the year two thousand and twenty-two"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar />
      <SideLinksList />
      <main className="h-screen w-full max-w-[1600px] py-0 px-6 md:px-24 lg:px-36 my-0 mx-auto bg-slate-800">
        <section className="flex flex-col justify-center items-start min-h-screen max-w-5xl p-0 bg-slate-800">
          <div>
            <h1 className="ml-1 mb-4 text-[#7851a9] font-mono text-lg lg:text-xl">
              Hi, my name is
            </h1>
          </div>
          <div>
            <h2 className="m-0 text-7xl font-semibold text-slate-200">
              Zachary Blake
            </h2>
          </div>
          <div>
            <h3 className="mt-3 text-slate-500 text-7xl font-semibold">
              Web3 dev.
            </h3>
          </div>
          <div>
            <p className="max-w-xl mt-5 text-slate-500">
              I&apos;m a web developer currently making the transition from Web2
              to Web3. I am super passionate about crypto and am excited to
              build the next generation of the Internet.
            </p>
          </div>
          <div>
            <a href="https://ztb.hashnode.dev" rel="noreferrer" target="_blank">
              <button className="w-64 outline outline-[1.5px] outline-[#7851a9] hover:bg-opacity-10 hover:bg-purple-500 font-mono font-medium p-4 mt-4 text-[#7851a9] text-sm rounded transition-all ease-in">
                Check out my blog!
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
