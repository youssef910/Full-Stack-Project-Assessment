import React, { useState, useEffect } from 'react';
import { Card, CardContent, Icon } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import getAllVideos from '../api/getVideosList';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setVideoList(await getAllVideos());
    };
    fetchApi();
  }, []);

  return (
    <Card.Group itemsPerRow='3'>
      {videoList.map((video, key) => (
        <Card color='black' key={key}  onClick={()=>console.log(video.id)}>
          <Card.Content>
            <Card.Header>{video.title}</Card.Header>

            <ReactPlayer url={video.url} light width={'100%'} controls={true} />
          </Card.Content>
          <CardContent extra textAlign='left'>
            Rating {video.rating}
            <Icon name='chevron circle up' color='blue' />
            up vote
            <Icon name='chevron circle down' color='blue' />
            Down vote
          </CardContent>
        </Card>
      ))}
    </Card.Group>
  );
};

export default VideoList;
