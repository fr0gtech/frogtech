import Link from "next/link"
import Github from "../public/github.svg"
function ArticleComp(props:any){
    return (
        <Link href={props.link || "#"}>

        <div className='border-2 border-opacity-90 h-full rounded-md flex flex-col justify-between p-5 max-w-[290px] border-neutral-800  duration-700'>
            <div>
              <h2 className='text-xl font-bold underline'>{props.title}</h2>
            <p className='text-1xl mt-2'>{props.text}</p>
            </div>
            <Link href={props.cta.link || "#"}>

            <div className="bg-neutral-800 p-2 rounded mt-3 duration-500 !text-white opacity-40 hover:opacity-95">
                <div className="flex item-center gap-3">
                {props.cta.link.includes('github') &&
                <Github fill="#fff" width={18} height={18}/>
                }
                <p className='!text-sm m-0 p-0 font-semibold'>{props.cta.title}</p>

                </div>
                <p className='!text-sm !my-1'>{props.cta.text} </p>
            </div>
              </Link>

          </div>
          </Link>

    )
}
export default ArticleComp