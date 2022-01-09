import React, { useState, useEffect } from 'react';
import { Row, Container, Modal, Button } from 'react-bootstrap';
import {
  getAllVideos,
  sort,
  search,
  deleteVideo,
} from '../api/VideoListManagement';
import SearchVideos from './SearchVideos';
import SortDropDown from './SortDropDown';
import VideoCard from './VideoCard';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const pageReload = () => getAllVideos().then((res) => setVideoList(res.data));

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  useEffect(() => {
    pageReload();
  }, [setVideoList]);

  const handleSorting = (sorter) => {
    sort(sorter).then((data) => setVideoList(data.data));
  };
  const handleSearch = (searchWord) => {
    search(searchWord).then((data) => setVideoList(data.data));
  };

  const AskConfirmDelete = (id) => {
    setShow(true);
    setDeleteId(id);
  };
  const handleConfirm = () => {
    setShow(false);
    deleteVideo(deleteId);
    window.location.reload();
  };
  return (
    <div>
      {!show ? (
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
                pageReload={pageReload}
                confirmDeleteVideo={AskConfirmDelete}
              />
            ))}
          </Row>
        </Container>
      ) : (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: 'red' }}>
            Are you sure you want to delete this video
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleConfirm}>
              yes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default VideoList;
