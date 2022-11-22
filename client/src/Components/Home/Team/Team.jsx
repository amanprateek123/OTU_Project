import React from 'react'
import './Team.scss'
import sushil from './sushil.jpeg'
import raj from './raj.JPG'
import ashish from './ashish.jpeg'

export default function Team() {
    return (
        <div className="team" >
            <h1>Team</h1>
            <div>            
                <div className="card" data-aos="zoom-in"
                                      data-aos-easing="linear"
                                      data-aos-duration="1000"  >
                   <img src={raj} alt="pic" />
                   <h3>Raj Kumar</h3>
                   <h6>CEO</h6>
                </div>
                <div className="card" data-aos="zoom-in"
                                      data-aos-easing="linear"
                                      data-aos-duration="1000"  >
                   <img src={ashish} alt="pic" />
                   <h3>Ashish Kumar</h3>
                   <h6>CMO</h6>
                </div>
                <div className="card" data-aos="zoom-in"
                                      data-aos-easing="linear"
                                      data-aos-duration="1000"  >
                   <img src={sushil} alt="pic" />
                   <h3>Sushil Sharma</h3>
                   <h6>CFO</h6>
                </div>                
            </div>
        </div>
    )
}
