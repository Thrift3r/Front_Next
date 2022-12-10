import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
          <div className='content'>
            {children}
          </div>
        <Footer />
      </body>
    </html>
  )
}
