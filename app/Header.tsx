import Link from "next/link"

const Header = () => {
  return (
    <header className="mx-auto w-full max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-heading text-4xl font-bold">
          ESKIE
        </Link>
      </div>
    </header>
  )
}

export default Header
