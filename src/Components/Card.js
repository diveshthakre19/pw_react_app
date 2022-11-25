import React from 'react'

const cards = ({batch, imgURL,baground}) => {
  return (
    <div className="cards">
        <div className="left-section">
          <div className="top-card">
            <h2>{batch}</h2>
            <p>Batches</p>
          </div>
          <div className="bottom-card">Explore</div>
        </div>
        <div className="right-section">
          <div className="baground" id={baground}></div>
          <div className="image-section">
            <img src={imgURL} alt="" />
          </div>
        </div>
      </div>
  )
}

export default cards
