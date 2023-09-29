import React from 'react'
// import style from './YoutubeItem.module.css';

function YoutubeItem(props) {
  return (
    <div>
      <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt={props.image}/>
      </div>
      <div className="youtube-description">
         <img src={props.avatar} alt={props.avatar} className='youtube-avatar' />
         <div className="youtube-info">
            <h3 className="youtube-title">
              {props.title}
            </h3>
            <h4 className="youtube-author">
              {props.author}
            </h4>
         </div>
      </div>
    </div>
    </div>
  )
}

export default YoutubeItem
