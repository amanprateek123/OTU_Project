import React from 'react'
import './Facility.scss'

export default function Facility() {
    return (
        <div>
           <div className="facility">
               <div className="faci" data-aos="zoom-in"
                                     data-aos-easing="linear"
                                     data-aos-duration="1000" >
                   <figure>
                      <img src="https://kangaroopropane.com/wp-content/themes/kangaroo_propane/assets/Best Quality.svg" alt="Best Quality"/>
                   </figure>
                   <h3>Best Quality</h3>
                   <p>We offer the best quality bags in the industry</p>
               </div>
               <div className="faci" data-aos="zoom-in"
                                     data-aos-easing="linear"
                                     data-aos-duration="1000" >
                   <figure>
                   <img src="https://kangaroopropane.com/wp-content/themes/kangaroo_propane/assets/Fast-Shipping.svg" alt="Fast Delivery"/>
                   </figure>
                   <h3>Home Delivery soon</h3>
                   <p>Same day bag delivery service guaranteed by our qualified delivery professionals</p>
               </div>
               <div className="faci" data-aos="zoom-in"
                                     data-aos-easing="linear"
                                     data-aos-duration="1000" >
                   <figure>
                   <img src="https://kangaroopropane.com/wp-content/themes/kangaroo_propane/assets/Live Tracking.svg" alt="Live Tracking"/>
                   </figure>
                   <h3>Need Help?</h3>
                   <p>Need any help? Feel free to contact us. We reach you at any time soon.</p>
               </div>
               <div className="faci" data-aos="zoom-in"
                                     data-aos-easing="linear"
                                     data-aos-duration="1000" >
                   <figure>
                   <img src="https://kangaroopropane.com/wp-content/themes/kangaroo_propane/assets/24x7-Support.svg" alt="24x7 Support"/>
                   </figure>
                   <h3>24x7 Support</h3>
                   <p>Our 24x7 customer support team is here to assist you with any of your questions</p>
               </div>
           </div>
        </div>
    )
}
