import { Children } from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
      {/* <Footer></Footer> */}
    </>
  )
}

export default Layout