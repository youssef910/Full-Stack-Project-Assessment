import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import getAllVideos from '../api/getVideosList';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setVideoList(await getAllVideos());
    };
    fetchApi();
  }, [videoList]);

  const handleUpVote = (id) => {
    fetch(`http://localhost:5000/api/up-vote/${id}`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => setVideoList(data.data));
  };
  const handleDownVote = (id) => {
    fetch(`http://localhost:5000/api/down-vote/${id}`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => setVideoList(data.data));
  };

  return (
    <div className=' container bg-dark'>
      <header className='App-header  text-center text-light'>
        <h1>Video Recommendation</h1>
      </header>
      <div className='row justify-content-md-center'>
        {videoList.map((video, key) => (
          <div
            className=' card p-0 m-2 card text-dark bg- mb-3 border-primary
             text-center col-sm-12 col-xl-4 col-xxl-4 col-lg-4 col-xsm-12 col-md-4'
            key={key}
          >
            <h5 className='card-header '>{video.title}</h5>
            <div className='card-body'>
              <ReactPlayer
                url={video.url}
                light
                width={'100%'}
                controls={true}
              />
            </div>
            <div className='card-footer'>
              <button type='button' class='btn btn-primary'>
                Rating <span class='badge bg-secondary'>{video.rating}</span>
              </button>
              <Icon
                name='chevron circle up'
                color='blue'
                onClick={() => handleUpVote(video.id)}
              />
              up vote
              <Icon
                name='chevron circle down'
                color='blue'
                onClick={() => handleDownVote(video.id)}
              />
              Down vote
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
