import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import FooterComp from '../components/footer'
import Frog from '../public/frog.svg'
import Github from '../public/github.svg'
import Link from 'next/link'
const ArticleComp = dynamic(() => import('../components/article'), {
  ssr: false,
})
export default function Home() {
  const [iwantIn, setIwantIn] = useState(1)

  const [playbackRate, setPlaybackRate] = useState<any>(1);

  const handleClick = () => {
    setIwantIn(iwantIn + 1)

  }
  return (
    <div className='mx-auto flex flex-col'>
      <Head>
        <title>frogTech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col'>


        <div className='shadow-xl items-center justify-center h-fill bg-gradient-to-r from-blue-800 to-orange-800 via-purple-800 animate-gradient-x'>
          <div>
            <h1 className="text-5xl flex gap-4 flex-wrap items-center justify-center my-20">
              frogTech
              <div className='clip'>
                <Frog fill="#eeeeee" width={286 / 3} height={301 / 3} />
              </div>
            </h1>
          </div>
          <div className='container rounded mx-auto py-10 p-10 flex justify-between items-center relative flex-col xl:flex-row gap-3'>
            <h3 className='text-3xl'>Join the most e1337 frogs & build the future!</h3>
            <div>
              {playbackRate > 3 &&
                <span className=''>🔔</span>
              }
              <button onClick={handleClick} className="shadow text-sm xl:text-xl bg-neutral-900 p-2 rounded select-none cursor-pointer active:scale-[1.01] active:rotate-[.5deg] duration-200">
                uggcf://qvfpbeq.tt/ac5eUPEXg2
              </button>
              <div className='flex flex-col gap-3'>

                {iwantIn === "uggcf://qvfpbeq.tt/nvagabjnllbhpyvpxgungzhpu".length * 55 &&
                  <Image className='absolute left-0 top-0 opacity-50' alt="sure?" src="/clueless-aware.gif" height={1000} width={1000} />
                }
                {iwantIn > 1 && "uggcf://qvfpbeq.tt/nvagabjnllbhpyvpxgungzhpu".length * 5 >= iwantIn &&
                  <div className='!text-sm absolute'>
                    {"uggcf://qvfpbeq.tt/nvagabjnllbhpyvpxgungzhpu".split('').map((char: any, i: any) => {
                      if (i > iwantIn / 3)
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
        <div className=' flex md:p-20 flex-wrap justify-center w-full gap-4'>
          <ArticleComp
            color="cyan-500"
            link="https://pokeING.frogtech.dev"
            title="pokeING"
            text="Do pokeING, be the second or third to listen to a soon to be popular song"
            cta={{
              title: "spoty-stalk - by frogtech",
              text: "stalk someones public spotify playlists",
              link: "https://github.com/fr0gtech/spoty-stalk"
            }}
            tags={[
              { name: 'open source', color: 'bg-purple-500' },
              { name: 'spotify', color: 'bg-[#1DB954]' }

            ]}
          />
          <ArticleComp
            color="cyan-500"
            link="https://poke.frogtech.dev"
            title="poke+"
            disabled="Discontinued"
            text="Create vod highlights from chat. Show graph like youtube but its chat activity."

            cta={{
              title: "streamHighlights - by frogtech",
              text: "not yet opensource",
              link: "https://poke.frogtech.dev"
            }}
            tags={[
              { name: 'twitch', color: 'bg-[#9147FF]' }

            ]}
          />
          <div>
            <div className='flex justify-center'>
              <Link href="https://github.com/fr0gtech/twitch-vod-chat-downloader">
                <div className="bg-neutral-900 p-2 rounded mt-3 duration-500 !text-white opacity-70 hover:opacity-95 hover:shadow">
                  <div className="flex item-center gap-3">
                    <Github fill="#fff" width={18} height={18} />
                    <p className='!text-sm m-0 p-0 font-semibold'>twitch-vod-chat-downloader</p>
                  </div>
                  <p className='!text-sm !my-1 max-w-[200px]'>Very simple template to download a twitch chat from a vod. gql</p>
                </div>
              </Link>
              <Link href="https://github.com/fr0gtech/frogBump">
                <div className="bg-neutral-900 p-2 rounded mt-3 duration-500 !text-white opacity-70 hover:opacity-95 hover:shadow">
                  <div className="flex item-center gap-3">
                    <Github fill="#fff" width={18} height={18} />
                    <p className='!text-sm m-0 p-0 font-semibold'>frogBump</p>
                  </div>
                  <p className='!text-sm !my-1 max-w-[200px]'>Random video player made in unity</p>
                </div>
              </Link>
            </div>
           
          </div>
        </div>

      </main>

      <FooterComp />
    </div>
  )
}
