import React from 'react'
import YoutubeItem from './YoutubeItem/YoutubeItem';
import {YoutubeData} from '../../YoutubeData';
// import style from '../YoutubeList/YoutubeList.module.css'

// Parent component

function YoutubeList(props) {
  // console.log(YoutubeData );
  // const numbers = [1,2,3,4,5];
  // const double = numbers.map((num) => num * 2);
  // console.log(double)

  return (
    <div>
      <div className="youtube-list">
        {props.children}
        {/* import data: cho phép thực hiện 1 loạt công việc dựa trên thông tin từ mỗi phần tử trong mảng */}
        {YoutubeData.map((item, index) => (
          // <div key={item.id}>Hello {index + 1}</div>
          <YoutubeItem 
          key={item.id}
          image={item.image}
          avatar={item.avatar || 'hi'}
          title={item.title}
          author={item.author}
          className={index === 1 ? 'active' : ''}
          />
        ))}

        {/* <YoutubeItem image={image} avatar={avatar} title={title} author={author} />
        <YoutubeItem image={image} avatar={avatar} title={title} author={author} />
        <YoutubeItem image={image} avatar={avatar} title={title} author={author} />
        <YoutubeItem image={image} avatar={avatar} title={title} author={author} /> */}
      </div>
    </div>
  )
}

export default YoutubeList
