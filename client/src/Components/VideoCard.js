import React from 'react';
import ReactPlayer from 'react-player';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grommet,
} from 'grommet';
import { Dislike, Like, Trash } from 'grommet-icons';
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
    <Grommet full>
      <Card
        round='small'
        elevation='small'
        width='medium'
        background='#72A2C0'
        border={{ color: '#00743F', size: 'medium' }}
      >
        <CardHeader level='2' justify='center' pad='medium'>
          {video.title}
        </CardHeader>
        <CardBody height='small' pad='small'>
          <ReactPlayer url={video.url} light width={'100%'} controls />
        </CardBody>
        <CardFooter direction='column'>
          <Box direction='row' align='center' gap='medium'>
            <Button
              a11yTitle='2 Available Updates'
              label='rating'
              badge={{
                value: video.rating,
                max: 10000,
              }}
            />
            <Box direction='row' gap='small'>
              <Button
                plain
                icon={<Like color='blue' size='small' />}
                label='Up Vote'
                onClick={handleUpVote}
              />
              <Button
                plain
                icon={<Dislike color='red' size='small' />}
                label='down Vote'
                onClick={handleDownVote}
              />
            </Box>
          </Box>
          <Box
            direction='row'
            align='center'
            alignContent='center'
            gap='medium'
          >
            <Trash color='red' size='medium' onClick={handleDeleteVideo} />
          </Box>
        </CardFooter>
      </Card>
    </Grommet>
  );
};

export default VideoCard;
