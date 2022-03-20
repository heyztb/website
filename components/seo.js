import Head from "next/head"

export const SEO = () => {
  const seo = {
    title: "ztb",
    description: "my portfolio for the year two thousand and twenty-two",
    url: "https://zach.gm",
    twitterUsername: "@heyztb",
    image: "/profile.jpg", // TODO: change this to a screenshot of the hero component
  }

  return (
    <Head>
      <title>ztb</title>

      <meta
        name="description"
        content="my portfolio for the year two thousand and twenty-two"
      />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
