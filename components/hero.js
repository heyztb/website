import React from "react"

export const Hero = () => {
  return (
    <section className="flex flex-col min-h-screen max-w-5xl py-24 md:py-16 bg-slate-900">
      <div>
        <h1 className="ml-1 mb-4 text-[#7851a9] font-mono text-md lg:text-lg">
          Hi, my name is
        </h1>
      </div>
      <div>
        <h2 className="text-4xl lg:text-6xl font-semibold text-slate-200">
          Zachary Blake
        </h2>
      </div>
      <div>
        <h3 className="mt-3 text-slate-400 text-4xl lg:text-6xl font-semibold">
          Web3 developer.
        </h3>
      </div>
      <div>
        <p className="max-w-xl mt-5 text-slate-400">
          I&apos;m a full-stack web developer that is driven by buildng cool
          things I believe will add value to the lives of those who use it.
          Currently I am focused on building a new way for people to find and
          verify talent with the{" "}
          <span className="text-[#7851a9]">
            <a href="https://github.com/posp-so">Proof of Skill Protocol</a>
          </span>
          {"."}
        </p>
      </div>
      <div>
        <a
          href="https://mirror.xyz/0x55241577E66d4Bf1dd4577090C970F8e4f509cC1"
          rel="noreferrer"
          target="_blank"
        >
          <button className="w-64 outline outline-[1.5px] outline-[#7851a9] hover:bg-opacity-10 hover:bg-purple-500 font-mono font-medium p-4 mt-12 lg:mt-8 text-[#7851a9] text-sm rounded transition-all ease-in">
            Check out my blog!
          </button>
        </a>
      </div>
    </section>
  )
}
