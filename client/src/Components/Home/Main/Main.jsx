import React from 'react'
import './Main.scss'
import {Button} from '@material-ui/core'

export default function Main() {
    const scrollTop = () =>{
        window.scrollTo({top: 530, behavior: 'smooth'});
      };
    return (
        <div style={{width:'100%'}}>
            <div className="main" >
                  <div className="main_cont" >
                     {/*<h3>10-20% Off for bulk orders!!!</h3>*/}
                     <h1>Om Thaila Udyog</h1>
                     <ul>
                        <li>Strength over Show</li>
                        <li>Fully Functional Bags</li>
                        <li>Style and Comfort go hand-in-hand</li>
                        <li>Efficient Workload Management</li>
                        <li>Customer Satisfaction is our Holy Grail</li>
                     </ul>
                     <Button className="get" variant="contained" color="inherit" onClick={scrollTop} >Get Started</Button>
                  </div>
                  <div className="main_img" >
                  </div>
            </div>
        </div>
    )
}
