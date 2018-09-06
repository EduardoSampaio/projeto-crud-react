import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

export default props =>
        <div className="app">
            <Logo />
            <Nav />  
            <Home/>        
            <Footer />
        </div>