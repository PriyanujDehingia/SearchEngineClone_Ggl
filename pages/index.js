import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={"flex w-full p-5 justify-between text-sm font-medium text-gray-700"}>
        {/* left */}
        <div className={"flex space-x-4 items-center"}>
          <p className={"link"}>About</p>
          <p className={"link"}>Store</p>
        </div>
        {/* right */}
        <div className={"flex space-x-4 items-center"}>
          <p className={"link"}>Gmail</p>
          <p className={"link"}>Images</p>
           {/* Icon */}
           <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
      {/* Avatar */}
      <Avatar url="https://pbs.twimg.com/profile_images/1204241336578146305/S3dW48NM_400x400.jpg"/>
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow"> 
        <Image 
        src='https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif'
        height={160}
        width={400}
        />
        <div className="flex w-full cursor-pointer mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5"/>
          </div>
          
      </form>
      {/* footer */}
     

    </div>
  )
}
