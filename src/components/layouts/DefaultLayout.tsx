import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Main className="pt-16 pb-28">{children}</Main>
      <Footer />
    </div>
  )
}
