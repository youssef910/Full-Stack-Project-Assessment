import React, { useState, useEffect } from 'react';
import {
  getAllVideos,
  sort,
  search,
  deleteVideo,
} from '../api/VideoListManagement';
import { Box, Grid, Text, Layer, Button, Heading } from 'grommet';

import SearchVideos from './SearchVideos';
import SortDropDown from './SortDropDown';
import VideoCard from './VideoCard';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [searchError, SetSearchError] = useState();

  const pageReload = () => getAllVideos().then((res) => setVideoList(res.data));

  const handleClose = () => setShow(false);
  useEffect(() => {
    pageReload();
  }, [setVideoList, searchError]);

  const handleSorting = (sorter) => {
    sort(sorter).then((data) => setVideoList(data.data));
  };
  const handleSearch = (searchWord) => {
    search(searchWord).then((res) =>
      res.statusText === 'OK' ? setVideoList(res.data) : SetSearchError(true)
    );
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
      <Box fluid>
        <Box direction='row' margin='medium' justifyContent='center'>
          <SortDropDown handleSorting={handleSorting} />
          <SearchVideos handleSearch={handleSearch} />
        </Box>

        <Grid
          justifyContent='center'
          alignContent='between'
          gap='medium'
          columns={{ count: 'fit', size: ['small', 'medium'] }}
        >
          {videoList.map((video, key) => (
            <VideoCard
              video={video}
              key={key}
              pageReload={pageReload}
              confirmDeleteVideo={AskConfirmDelete}
            />
          ))}
        </Grid>
      </Box>
      {show && (
        <Layer
          full='horizontal'
          modal
          responsive='true'
          animate='fadeIn'
          style={{ color: 'red' }}
          show={show}
          onHide={handleClose}
        >
          <Text> Delete video</Text>

          <Text>Are you sure you want to delete this video</Text>
          <Box flex pad='xsmall'>
            <Button label='Close' color='blue' onClick={handleClose}></Button>
            <Button onClick={handleConfirm} label='yes'>
              yes
            </Button>
          </Box>
        </Layer>
      )}
      {searchError && (
        <Layer
          background='light-3'
          animate='fadeIn'
          style={{ color: 'red' }}
          full='horizontal'
          show={searchError}
          modal
          responsive='true'
          onHide={() => SetSearchError(undefined)}
        >
          <Text> search word is not found</Text>

          <Text>there is no search results for your search</Text>
          <Box flex overflow='auto' pad='xsmall'>
            <Button
              label='Close'
              color='blue'
              fill
              onClick={() => SetSearchError(undefined)}
            ></Button>
          </Box>
        </Layer>
      )}
    </div>
  );
};

export default VideoList;
