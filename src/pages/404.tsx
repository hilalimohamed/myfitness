import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 6000)
  }, [])

  return (
    <div className="p-32">
      <h1 className="font-extrabold text-xl">Oooops...</h1>
      <h2>That page cannot be found</h2>
      <h3>
        Back to the{" "}
        <span className="text-orange-500 font-semibold">
          <Link href="/">HOME</Link>
        </span>{" "}
        page
      </h3>
    </div>
  )
}
