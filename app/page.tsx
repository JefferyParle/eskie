import Footer from "./Footer"
import Header from "./Header"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="flex-1">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
          Body content
        </div>
      </section>
      <Footer />
    </main>
  )
}
