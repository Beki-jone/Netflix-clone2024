import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Banner from '../../Banner/Banner'
import Rowlist from '../../Row/Rowlist'

const Home = () => {
  return (
    <div>
     <Header/>
     <Banner/>
     <Rowlist/>
     <Footer/>
    </div>
  )
}

export default Home
// * for the purpose of rendering the header and footer components 