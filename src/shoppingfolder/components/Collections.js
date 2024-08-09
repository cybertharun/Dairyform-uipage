import React from 'react'

const Collections = (props) => {
    const {title,image1,image2,image3,image4,image5}=props.buffaloMilk

  return (
    <div className='collectionSection'>
      <h2 style={{'text-align':"center"}} id="buffalo">{title}</h2>
      <div className="BuffaloMilkImages">
        <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image5} alt={title}/>
      </div>
    </div>
  )
}

export default Collections
