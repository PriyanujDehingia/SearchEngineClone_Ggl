import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid"
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from "next/router";

function Gmail() { 
  window.open( 
    "https://www.gmail.com", "_blank");
}
function Photos() { 
  window.open( 
    "https://photos.google.com", "_blank");
}
function About() { 
  window.open( 
    "https://about.google", "_blank");
}
function Store() { 
  window.open( 
    "https://play.google.com/store", "_blank");
}

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);


  }

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={"flex w-full p-5 justify-between text-sm text-gray-700"}>
        {/* left */}
        <div className={"flex space-x-4 items-center"}>
          <p className={"link"} onClick={About}>About</p>
          <p className={"link sm:hidden"} onClick={Store}>Store</p>
        </div>
        {/* right */}
        <div className={"flex space-x-4 items-center"}>
          <p className={"link"} onClick={Gmail}>Gmail</p>
          <p className={"link"} onClick={Photos}>Images</p>
           {/* Icon */}
           <a class="gb_C" aria-label="Google apps" href="https://www.google.co.in/intl/en/about/products" aria-expanded="false" role="button" tabindex="0">
             <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
           </a>
      {/* Avatar */}
      <Avatar url="https://pbs.twimg.com/profile_images/1204241336578146305/S3dW48NM_400x400.jpg"/>
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-38 flex-grow w-4/5"> 
        <Image 
        src='https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif'
        height={160}
        width={400}
        />
        <div className="flex w-full cursor-pointer mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" ref={searchInputRef} autoFocus onFocus={e => e.currentTarget.select()} className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5"/>
          </div>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">Google Search</button>
            <button onClick={search} className="btn">I'm Feeling Lucky</button>
          </div>
      </form>
      {/* footer */}
     <Footer />

    </div>
  )
}
