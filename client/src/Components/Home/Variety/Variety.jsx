import React from 'react'
import './Variety.scss'
import img from './bag.png'
import img1 from './pic1.JPG'
import img2 from './pic2.JPG'
import img3 from './pic3.JPG'


export default function Variety() {
    return (
        <div className="variety" >
            <div className="var_cont" >
                <h1>Wide variety of bags ready to order!</h1>
                <div className="bag">
                    <div className="list" data-aos="zoom-in"
                                      data-aos-easing="linear"
                                      data-aos-duration="1000"  >
                       <div>
                          <img src={img1} alt="pic" />
                       </div>
                       <h4>Laptop Bags</h4>
                    </div>
                    <div className="list" data-aos="zoom-in"
                                      data-aos-easing="linear"
                                      data-aos-duration="1000"  >
                       <div>
                          <img src={img2} alt="pic" />
                       </div>
                       <h4>Hand Bags</h4>
                    </div>
                    <div className="list" data-aos="zoom-in"
                                      data-aos-easing="linear"
                                      data-aos-duration="1000"  >
                       <div>
                          <img src={img3} alt="pic" />
                       </div>
                       <h4>Side Bags</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
