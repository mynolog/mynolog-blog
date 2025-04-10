import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <Main className="pt-28">{children}</Main>
      <Footer />
    </div>
  )
}
