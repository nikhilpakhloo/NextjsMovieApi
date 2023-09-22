
import Navbar from './components/Navbar'
import './globals.css'
import { Mulish } from 'next/font/google'
const roboto = Mulish({
  weight: '400',
  subsets: ['latin'],
})
 export const metadata = {
  title: 'Next js',

}
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <Navbar/>
        {children}

      </body>
    </html>
  )
}
