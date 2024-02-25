import React from 'react'
import Slider from 'react-slider'
import {Link }from 'react-dom'
import '../CSS/Banner.css'


function Banner() {

    const data =[
        {
    id:1, 
    title:"fresh bread",
    image:'../image/10001.webp',
    discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
},{
    id:2,
    image: "../image/10002.jpg",
    title:'cheases',
    discription:'our cheeses are made with the finest ingredients.',
    button:'Shop Now!'
}

]

let settings = {
    dots:true,
    infinite: true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1
};


  return (
    <div className='bannerslider'>
       <Slider className='bannerslider' {...settings}>
{
    data.map(item=>{
        return(
            <div className='imagecont' key={item.id}>
                <img src={item.image} alt='noimg'/>
                   <div className='content'>
                   <h3>{item.title}</h3>
                   <span>{item.discription}</span>
                   <button>shope more</button>
                   </div>
            </div>
        )
    })
}

</Slider>
  
        </div>
    
  )
}

export default Banner