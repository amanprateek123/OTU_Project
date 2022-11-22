import React from 'react'
import './Content.scss'
import img from './photo.jpeg'

export default function Content() {
    return (
        <div className="content" >
            <div className="speech" data-aos="zoom-in-up" 
                                    data-aos-easing="linear"
                                    data-aos-duration="800" >
                 <div className="text" >
                 <img src="https://kangaroopropane.com/wp-content/themes/kangaroo_propane/assets/quote-left.png" alt="quote"/>
                 <p>
                 I am extremely happy with Om Udyog Thaila's services. Not only they deliver me bags on time, but 
                 they excel at their customer service by helping me with my equipment needs and proactively addressing any bags related issues
                 </p>
                 <h2>Aman</h2>
                 </div>
                 <div className="auth" >
                    <img src={img} alt="images"/>
                 </div>
            </div>
        </div>
    )
}
