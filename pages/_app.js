import "../styles/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import NavbarComponent from "../Router/Navbar"

const AppComponent = ({Component, pageProps}) => {
  return (
    <>
    <div className="main-app">
      <NavbarComponent />
      <Component {...pageProps}/>
    </div>
    </>
  )
}

export default AppComponent