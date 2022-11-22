import React from 'react';
import './About.scss'

export default function About() {
   return (
      <div className="about">
         <div className="cont" >
            <div className="items" >
               <div className="itm1" data-aos="flip-right"
                  data-aos-easing="linear"
                  data-aos-duration="800" >
                  <img src="https://www.pngitem.com/pimgs/m/528-5287151_pubg-bag-no-background-hd-png-download.png" alt="pic" />
               </div>
               <div className="itm2" data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="800" >
                  <h3>About Om Thaila Udyog</h3>
                  <p>“People from small towns are seen stuffing their dreams into storage bags, but we’ve designed storage bags for people to help them realize their dreams!”<br />
                     <div style={{ marginTop: '1em' }} >
                        Rooted in the small yet stunning town of Himachal Pradesh, since 2012, we work with a bigger motive and that is ‘to provide quality products to our most valuable, quality customers’. <br />
                    Om Thaila Udyog had humble beginnings with just a handful of products but now we’ve worked our way up to a wide range of products; including Luggage Bags, Travel Totes, Sports bags,
                    Duffel bags, Backpacks, School bags, College Bags, Messenger bags, Office bags, Handbags, Pouches and Assorted accessories. We’ve got something amazing for everyone, be it a kid or his grandparents.</div>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
