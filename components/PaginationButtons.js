import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid"

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
  
    <div className="pb-[15px] flex max-w-lg justify-between text-blue-700 bg-white sticky">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
        <div className="flex flex-grow flex-col items-center hover:underline active:text-blue-700 cursor-pointer">
          <ChevronLeftIcon className="h-5" />
          <p>Previous</p>
        </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-col flex-grow hover:underline items-center active:text-blue-700 cursor-pointer">
        <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
        </Link>
    </div>
  )
}

export default PaginationButtons
