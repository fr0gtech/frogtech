import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const ArticleComp = dynamic(() => import('../components/article'), {
  ssr: false,
})
export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>frogTech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center mb-10'>
        <h1 className="text-6xl flex gap-3 flex-wrap items-center justify-center my-5">
          frogTech
          <Image height={90} width={90} alt="frog" src="/frog.png" />
        </h1>
        <div className=' flex md:px-40 flex-wrap justify-center w-full gap-4'>
     
          <ArticleComp
          color="cyan-500"
            link="https://poking.frogtech.dev"
            title="POKING"
            text="Do POKING, be the second or third to listen to a soon to be popular song"
            cta={{
              title:"spoty-stalk - by frogtech",
              text:  "stalk someones public spotify playlists",
              link: "https://github.com/fr0gtech/spoty-stalk"}
              }/>
              
          <ArticleComp
          color="blue-500"
          link="#"
            title="More Soon"
            text="Join the most elite frogs, build the future!"
            cta={{
              title:"if !bot join discord:",
              text:  <code className="bg-neutral-900 text-xs p-[2px] rounded">uggcf://qvfpbeq.tt/ac5eUPEXg2</code>,
              link: "#"}
              }/>
        </div>
      </main>
      <footer className='text-center'>
          FrogTech &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
