import React from 'react'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
    return (
        <div style={{backgroundColor:'#ebebeb',borderTop:'1px #ebebeb solid',paddingTop:'1em'}} >
            <div className="footer" >
               <div className="contact" >
                  <h2>CONTACT INFO</h2>
                <div className="add" > 
                   <div>
                      <h4>Office</h4>
                      <p style={{width:'70%'}}>Village Bhiar Post Office Mehal Tehsil Bhoranj Distt Hamirpur HP 177401</p>
                   </div>
                   <div>
                      <h4>Phone Support:</h4>
                      <a href="tel:+919805309800">+91 9805309800</a>
                   </div>
                   <div>
                      <h4>More</h4>
                      <p>...</p>
                   </div>                   
                   <div>
                      <h4>E-mail Support:</h4>
                      <a href="mailto:info@omthailaudyog.com">info@omthailaudyog.com</a>
                   </div>
                </div>
               </div>
               <div className="social" >
                  <h2>FOLLOW US</h2>
                  <div>
                     <a style={{textDecoration:'none',color:'black'}} href="https://www.facebook.com/otuindia" target="blank" ><FacebookIcon className="icon" /></a>
                     <a style={{textDecoration:'none',color:'black'}} href="https://www.linkedin.com/company/om-thaila-udyog/" target="blank" ><LinkedInIcon className="icon" /></a>
                     <a style={{textDecoration:'none',color:'black'}} href="https://twitter.com/UdyogOm?s=08" target="blank" ><TwitterIcon className="icon" /></a>
                     <a style={{textDecoration:'none',color:'black'}} href="https://instagram.com/omthailaudyog_in?igshid=jdhkh6k5lzcy" target="blank" ><InstagramIcon className="icon" /></a>
                     <a style={{textDecoration:'none',color:'black'}} href="https://www.youtube.com/channel/UCqXs0IWyksR2jVASbGRWU5Q/featured?view_as=subscriber" target="blank" ><YouTubeIcon className="icon" /></a>
                  </div>
               </div>
            </div>
            <div className="term" >
                <div className="cond" >
                   <h4>TERMS & CONDITIONS</h4>
                   <h4>PRIVACY POLICY</h4>
                </div>
                <div className="pvt" >
                   <h6>Om Thaila Udyog ©{new Date().getFullYear()}. All Rights Reserved.</h6>
                </div>
            </div>
            <h4 className="author" >Website is designed and developed by <b style={{color:'blue'}} >Aman Prateek</b></h4>
        </div>
    )
}
