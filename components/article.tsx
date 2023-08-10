import Link from "next/link"
import Github from "../public/github.svg"
function ArticleComp(props:any){
  if (props.disabled){
    return (
      <div className='relative opacity-50 bg-neutral-800 shadow-md border-2 border-opacity-90 rounded-md flex flex-col justify-between p-5 max-w-[290px] border-neutral-700  duration-700'>
          
          <div>
            <h2 className='text-xl font-bold underline'>{props.title}</h2>
          <p className='text-1xl mt-2'>{props.text}</p>
          </div>

          <div className="bg-neutral-900 p-2 rounded mt-3 duration-500 !text-white opacity-40 hover:opacity-95 hover:shadow">
              <div className="flex item-center gap-3">
              {props.cta.link.includes('github') &&
              <Github fill="#fff" width={18} height={18}/>
              }
              <p className='!text-sm m-0 p-0 font-semibold'>{props.cta.title}</p>

              </div>
              <p className='!text-sm !my-1'>{props.cta.text} </p>
          </div>
              {props.tags && 
              <div className="flex gap-1 mt-4 text-xs">
                  {props.tags.map((tag:any)=>{return <div className={"rounded px-1" + " " + tag.color} key={tag.name}>{tag.name}</div>})}
              </div>
              }
        </div>
  )
  }else{

    return (
      <Link href={props.link || "#"}>
      <div className='hover:shadow-xl bg-neutral-800 shadow-md border-2 border-opacity-90 rounded-md flex flex-col justify-between p-5 max-w-[290px] border-neutral-700  duration-700'>
          <div>
            <h2 className='text-xl font-bold underline'>{props.title}</h2>
          <p className='text-1xl mt-2'>{props.text}</p>
          </div>
          <Link href={props.cta.link || "#"}>

          <div className="bg-neutral-900 p-2 rounded mt-3 duration-500 !text-white opacity-40 hover:opacity-95 hover:shadow">
              <div className="flex item-center gap-3">
              {props.cta.link.includes('github') &&
              <Github fill="#fff" width={18} height={18}/>
              }
              <p className='!text-sm m-0 p-0 font-semibold'>{props.cta.title}</p>

              </div>
              <p className='!text-sm !my-1'>{props.cta.text} </p>
          </div>
            </Link>
              {props.tags && 
              <div className="flex gap-1 mt-4 text-xs">
                  {props.tags.map((tag:any)=>{return <div className={"rounded px-1" + " " + tag.color} key={tag.name}>{tag.name}</div>})}
              </div>
              }
        </div>
        </Link>
  )
  }
  
}
export default ArticleComp