import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import {
  downVote,
  getAllVideos,
  upVote,
  sort,
  search,
} from '../api/VideoListManagement';
import SearchVideos from './SearchVideos';
import SortDropDown from './SortDropDown';
import VideoCard from './VideoCard';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);

  const pageReload = () => getAllVideos().then((res) => setVideoList(res.data));

  useEffect(() => {
    pageReload();
  }, [setVideoList]);
  const handleUpVote = (id) => {
    upVote(id);
    pageReload();
  };
  const handleDownVote = (id) => {
    downVote(id);
    pageReload();
  };
  const handleSorting = (sorter) => {
    sort(sorter).then((data) => setVideoList(data.data));
  };
  const handleSearch = (searchWord) => {
    search(searchWord).then((data) => setVideoList(data.data));
  };

  return (
    <Container
      fluid
      className='justify-content-center'
      style={{ backgroundColor: 'black' }}
    >
      <Row className='justify-content-center'>
        <header className='col App-header  text-center text-light'>
          <h1>Video Recommendation</h1>
        </header>
      </Row>
      <Row className=' my-3 justify-content-center'>
        <SortDropDown handleSorting={handleSorting} />
        <SearchVideos handleSearch={handleSearch} />
      </Row>
      <Row className=' justify-content-around'>
        {videoList.map((video, key) => (
          <VideoCard
            video={video}
            key={key}
            handleDownVote={handleDownVote}
            handleUpVote={handleUpVote}
          />
        ))}
      </Row>
    </Container>
  );
};

export default VideoList;
