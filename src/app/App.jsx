import React, { useState } from 'react'
import { s, CSS_STYLES } from '../data/styles.js'
import Banner from '../components/Banner.jsx'
import Navbar from '../components/Navbar.jsx'
import MobileMenu from '../components/MobileMenu.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import VideoSection from '../sections/VideoSection.jsx'
import Services from '../sections/Services.jsx'
import HowItWorks from '../sections/HowItWorks.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Pricing from '../sections/Pricing.jsx'
import Disclaimer from '../sections/Disclaimer.jsx'

export default function App() {
  var menuState = useState(false)
  var menuOpen = menuState[0]
  var setMenuOpen = menuState[1]

  var bannerState = useState(true)
  var bannerVisible = bannerState[0]
  var setBannerVisible = bannerState[1]

  return React.createElement('div', { style: s.body },
    React.createElement('style', { dangerouslySetInnerHTML: { __html: CSS_STYLES } }),
    React.createElement(Banner, { visible: bannerVisible, onClose: function() { setBannerVisible(false) } }),
    React.createElement(Navbar, { menuOpen: menuOpen, setMenuOpen: setMenuOpen }),
    React.createElement(MobileMenu, { menuOpen: menuOpen, setMenuOpen: setMenuOpen }),
    React.createElement(Hero, null),
    React.createElement(VideoSection, null),
    React.createElement(Services, null),
    React.createElement(HowItWorks, null),
    React.createElement(Testimonials, null),
    React.createElement(Pricing, null),
    React.createElement(Disclaimer, null),
    React.createElement(Footer, null)
  )
}
