import React from 'react';
import ReactPlayer from 'react-player';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';
import {
  HandThumbsDownFill,
  HandThumbsUpFill,
  TrashFill,
} from 'react-bootstrap-icons';
import { upVote, downVote } from '../api/VideoListManagement';

const VideoCard = (props) => {
  const { video, pageReload, confirmDeleteVideo } = props;

  const handleUpVote = () => {
    upVote(video.id);
    pageReload();
  };
  const handleDownVote = () => {
    downVote(video.id);
    pageReload();
  };
  const handleDeleteVideo = () => {
    confirmDeleteVideo(video.id);
  };

  return (
    <Card text='center' bg='info' style={{ width: '31%' }} className='m-2 p-0'>
      <Card.Header center>{video.title}</Card.Header>
      <Card.Body>
        <ReactPlayer url={video.url} light width={'100%'} controls={true} />
      </Card.Body>

      <Card.Body>
        <Row>
          <Col>
            <Button type='button' variant='primary'>
              Rating{' '}
              <Badge text='danger' pill bg='dark'>
                {video.rating}
              </Badge>
            </Button>
          </Col>
          <Col>
            <HandThumbsUpFill
              color='blue'
              size={'1.5rem'}
              onClick={handleUpVote}
            />
            up vote
          </Col>
          <Col>
            <HandThumbsDownFill color='red' onClick={handleDownVote} />
            Down vote
          </Col>
        </Row>
      </Card.Body>
      <Card.Body>
        <Row>
          <Col>
            <TrashFill color='red' size={20} onClick={handleDeleteVideo} />
            Delete Video
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
