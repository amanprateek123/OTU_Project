import React,{useState} from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Home.scss'

import About from '../../Components/Home/About/About'
import Content from '../../Components/Home/Content/Content'
import Facility from '../../Components/Home/Facility/Facility'
import Main from '../../Components/Home/Main/Main'
import Variety from '../../Components/Home/Variety/Variety'
import Product from '../../Components/Home/Carousel/Carousel'
import Team from '../../Components/Home/Team/Team'

export default function Home() {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
        }
      };

      const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
      window.addEventListener('scroll', checkScrollTop)

    return (
        <React.Fragment>
            <Main/>
            <Variety/>
            <Product/>
            <About/>
            <Facility/>
            <Content/>
            <Team/>
            <ArrowUpwardIcon className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}} />
        </React.Fragment>
    )
}
