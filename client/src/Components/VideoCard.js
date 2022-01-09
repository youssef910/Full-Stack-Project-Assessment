import React from 'react';
import ReactPlayer from 'react-player';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';
import { HandThumbsDownFill, HandThumbsUpFill } from 'react-bootstrap-icons';

const VideoCard = (props) => {
  const { video, handleUpVote, handleDownVote } = props;
  const UpVote = () => {
    handleUpVote(video.id);
  };
  const downVote = () => {
    handleDownVote(video.id);
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
            <HandThumbsUpFill color='blue' size={'1.5rem'} onClick={UpVote} />
            up vote
          </Col>
          <Col>
            <HandThumbsDownFill
              color='red'
              size={'1.5rem'}
              onClick={downVote}
            />
            Down vote
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
