import { Outlet } from 'react-router-dom'
import TopBanner from './TopBanner'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gov-bg">
      <TopBanner />
      <Header />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
