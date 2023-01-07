import Link from "next/link"
import Github from "../public/github.svg"
import Twitter from "../public/twitter.svg"

function FooterComp(){
    return (<footer className='text-center p-10'>
        <div className='flex justify-center gap-3 items-center'>
          <div>
            FrogTech &copy; {new Date().getFullYear()}
          </div>
          <div>
            <Link href="https://github.com/fr0gtech">
              <Github className="opacity-30" fill="#fff" width={18} height={18} />
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/frogtechdev">
              <Twitter className="opacity-30" fill="#fff" width={18} height={18} />
            </Link>
          </div>
        </div>
      </footer>)
}

export default FooterComp