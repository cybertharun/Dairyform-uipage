import React from 'react'

const MilkCollection = (props) => {
    const {title,image1,image2,image3,image4,image5}=props.milkpacket
  return (
    <div className="collectionSelection">
       
        <div className="bannerBox-2">
        <h2 style={{'text-align':"center"}} id="packet">{title}</h2>
            <img src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3MzcDc0eXg0aGNwazhvcXMzbWgzeDAxeTI0bm11MzJ4OWp4Y2hleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S8HOSXWC7eVJa6tQ83/giphy.gif' alt='banner'/>
            <div id='collectionSection-1'>
        <div className="milkpacket">
            <img src={image1}  alt={title}/>
            <img src={image2}  alt={title}/>
            <img src={image3}  alt={title}/>
            <img src={image4}  alt={title}/>
            <img src={image5}  alt={title}/>
            </div>
        </div>
        </div>
        

    </div>
      

  )
}

export default MilkCollection
