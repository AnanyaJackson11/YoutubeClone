import React from 'react';
import vid from './vid.mp4';
import WHL from './WHL';

function WatchHistory() {
    const history = [
        {
          _id: 1,
          video_src: vid,
          Chanel: "62bafe6752cea35a6c30685f",
          title: "video 1",
          Uploder: "abc",
          description: "description of  video 1",
        },
        {
          _id: 2,
          video_src: vid,
          Chanel: "cdd",
          title: "video 2",
          Uploder: "abc",
          description: "description of  video 2",
       },
        {
          _id: 3,
          video_src: vid,
          Chanel: "add",
          title: "video 3",
          Uploder: "abc",
          description: "description of  video 3",
        },
        {
         _id: 4,
          video_src: vid,
          Chanel: "add",
          title: "video 3",
          Uploder: "abc",
          description: "description of  video 3",
        },
      ];
  return (
    <>
   
    <WHL page={'History'} videoList={history}/>
    </>
  )
}

export default WatchHistory