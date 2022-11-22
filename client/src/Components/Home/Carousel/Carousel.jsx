import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.scss'
// import img1 from './01.JPG'
// import img2 from './02.JPG'
// import img3 from './03.JPG'


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Product() {
    return (
        <div className="carousel" >
        <h1>Latest Products</h1>
        <Carousel
        additionalTransfrom={0}
        arrows
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className="product"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        infinite={true}
        responsive={responsive}>
          <div className="prod" >
             <div>
               <img src="https://m.media-amazon.com/images/I/81WTrXGAwAL._AC_UL320_.jpg" alt="pic"  />
             </div>
             <h4>Air Bag</h4>
          </div>
          <div className="prod" >
             <div>
             <img src="https://m.media-amazon.com/images/I/81x7ItPa4eL._AC_UL320_.jpg" alt="pic"  />
             </div>
             <h4>School Bag</h4>
          </div>
          <div className="prod" >
             <div>
             <img src="https://m.media-amazon.com/images/I/61BRmtskakL._AC_UL320_.jpg" alt="pic"  />
             </div>
             <h4>School Bag</h4>
          </div>
          <div className="prod" >
             <div>
             <img src="https://m.media-amazon.com/images/I/91UGUHYoOtL._AC_UL320_.jpg" alt="pic"  />
             </div>
             <h4>Air Bag</h4>
          </div>
          {/*<div className="prod" >
             <div>
             <img src={img1} alt="pic"  />
             </div>
             <h4>Hand Bag</h4>
          </div>
          <div className="prod" >
             <div>
             <img src={img2} alt="pic"  />
             </div>
             <h4>Hand Bag</h4>
          </div>
          <div className="prod" >
             <div>
             <img src={img3} alt="pic"  />
             </div>
             <h4>Hand Bag</h4>
    </div>*/}
          <div className="prod" >
             <div>
               <img src="https://m.media-amazon.com/images/I/91Frp6HucwL._AC_UL320_.jpg" alt="pic"  />
             </div>
             <h4>Air Bag</h4>
          </div>
          <div className="prod" >
             <div>
             <img src="https://m.media-amazon.com/images/I/81wjz0SGamL._AC_UL320_.jpg" alt="pic"  />
             </div>
             <h4>School Bag</h4>
          </div>  
          <div className="prod" >
             <div>
             <img src="https://m.media-amazon.com/images/I/91e8v6RbjAL._AC_UL320_.jpg" alt="pic"  />
             </div>
             <h4>Gym Bag</h4>
          </div>    
        </Carousel>
        </div>
    )
}
