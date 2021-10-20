import Image from "next/image";
import { useRouter } from "next/router";
import {useRef} from "react";
import {XIcon, MicrophoneIcon, SearchIcon} from"@heroicons/react/solid"
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white shadow-sm">
      <div className="flex w-full p-6 items-center">
      <Image 
        src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"   height={50}  width={120} className="cursor-pointer" onClick={()=>{router.push("/")}}
      />
      
      <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg items-center max-w-3xl active:shadow-xl">
        <input ref={searchInputRef} className="flex-grow w-full focus:outline-none"  type="text" defaultValue={router.query.term}/>
        <XIcon className="h-7 mr-2 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={()=>(searchInputRef.current.value="")}/>
        <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
        <SearchIcon onClick={search} className="h-6 cursor-pointer text-blue-500 pl-4 sm:pl-1 border-l-2 sm:border-white"/>
        <button type="submit" hidden onClick={search}>Submit</button>
      </form>
      <Avatar className="ml-auto" url="https://pbs.twimg.com/profile_images/1204241336578146305/S3dW48NM_400x400.jpg"/>
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  )
}

export default Header
