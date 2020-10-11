import React, {useState, useEffect} from 'react'

const Carousel = ({currentCard}) => {
  const [currentImg, setCurrentImg] = useState(currentCard.content_img[0].url);
    
  const currentImgHandler = (i) => {
    setCurrentImg(currentCard.content_img[i].url);
  }

  return (
    <div className="container">
      <img className="properties__detail-carousel" src={currentImg} alt={currentCard.street}/>
      <div className="properties__detail-group">
        {
          currentCard.content_img.map((item, i) => {
            
            return (
              <div className={item.url == currentImg ? 'properties__detail-wrapper properties__detail-animate' : 'properties__detail-wrapper'}  key={item.url}>
                <img className="properties__detail-thumbnail" src={item.url} onClick={ e => currentImgHandler(i)} alt={currentCard.street}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Carousel
