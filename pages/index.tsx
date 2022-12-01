import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import FooterComp from '../components/footer'
import Github from "../public/github.svg"

const ArticleComp = dynamic(() => import('../components/article'), {
  ssr: false,
})
export default function Home() {
  const [iwantIn, setIwantIn] = useState(1)

  return (
    <div className='mx-auto flex flex-col'>
      <Head>
        <title>frogTech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col pb-20 '>
        <h1 className="text-5xl flex gap-3 flex-wrap items-center justify-center my-5">
          frogTech
          <Image height={90} width={90} alt="frog" src="/frog.png" className=' brightness-200' />
        </h1>
        <div className=' flex md:p-20 flex-wrap justify-center w-full gap-4'>
          <ArticleComp
            color="cyan-500"
            link="https://poking.frogtech.dev"
            title="POKING"
            text="Do POKING, be the second or third to listen to a soon to be popular song"
            cta={{
              title: "spoty-stalk - by frogtech",
              text: "stalk someones public spotify playlists",
              link: "https://github.com/fr0gtech/spoty-stalk"
            }}
            tags={[
              { name: 'app', color: 'bg-cyan-500' },
              { name: 'open source', color: 'bg-purple-500' },
              { name: 'spotify', color: 'bg-[#1DB954]' }

            ]}
          />
        </div>
      </main>
      <div className='shadow-xl flex items-center justify-center h-fill bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x my-20'>
        <div className='container rounded mx-auto py-10 p-10 flex justify-between items-center relative flex-col xl:flex-row gap-3'>
          <h3 className='text-3xl'>Join the most e1337 frogs & build the future!</h3>
          <div>

            <button onClick={()=>setIwantIn(iwantIn + 1)} className="shadow text-sm xl:text-xl bg-neutral-900 p-2 rounded select-none cursor-pointer active:scale-[1.01] active:rotate-[.5deg] duration-200">
              if not bot joinDiscord(uggcf://qvfpbeq.tt/ac5eUPEXg2)
              </button>
            <div className='flex flex-col gap-3'>

              {iwantIn === "uggcf://qvfpbeq.tt/nvagabjnllbhpyvpxgungzhpu".length * 55 &&
              <Image className='absolute left-0 top-0 opacity-50' alt="sure?" src="/clueless-aware.gif" height={1000} width={1000}/>
              }
              {iwantIn > 1 && "uggcf://qvfpbeq.tt/nvagabjnllbhpyvpxgungzhpu".length * 5 >= iwantIn &&
              <div className='!text-sm absolute'>
                {"uggcf://qvfpbeq.tt/nvagabjnllbhpyvpxgungzhpu".split('').map((char: any, i: any) => {
                  if (i > iwantIn / 5)
                    return
                  return char.replace(/[a-zA-Z]/g, function (c: any) {
                    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
                  })
                })}
              </div>
              }
              {"uggcf://qvfpbeq.tt/nvagabjnllbhpyvpxgungzhpu".length * 5 <= iwantIn &&
                <div className='text-center absolute text-sm'>still no idea?, google: Caesar cipher</div>
              }
            </div>
           
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  )
}
