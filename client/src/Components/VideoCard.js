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
    <Card style={{ width: '30%' }} className='m-2'>
      <Card.Title>{video.title}</Card.Title>
      <Card.Body>
        <ReactPlayer url={video.url} light width={'100%'} controls={true} />
      </Card.Body>

      <Card.Body>
        <Row>
          <Col>
            <Button type='button' variant='primary' disabled>
              Rating
              <Badge bg='secondary'>{video.rating}</Badge>
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
    // <div
    //   className=' card p-0 m-2 card text-dark bg- mb-3 border-primary
    //          text-center col-sm-12 col-xl-4 col-xxl-4 col-lg-4 col-xsm-12 col-md-4'
    // >
    //   <h5 className='card-header '>{video.title}</h5>
    //   <div className='card-body'>
    //
    //   </div>
    //   <div className='card-footer'>
    //     <button type='button' className='btn btn-primary disabled'>
    //       Rating <span class='badge bg-secondary'>{video.rating}</span>
    //     </button>
    //     <i
    //       className='bi bi-hand-thumbs-up '
    //       style={{ fontSize: '1.5rem', color: 'cornFlowerBlue' }}
    //       onClick={UpVote}
    //     >
    //       up vote
    //     </i>
    //     <i
    //       className='bi bi-hand-thumbs-down text-danger'
    //       style={{ fontSize: '1.5rem' }}
    //       onClick={downVote}
    //     >
    //       Down vote
    //     </i>
    //   </div>
    // </div>
  );
};

export default VideoCard;
