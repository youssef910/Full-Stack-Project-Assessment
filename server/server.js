const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
let router = express.Router();
var cors = require('cors');
app.use(cors());
app.use('/api/', router);
const getAllVideos = require('./videos');
// const api = require('./api');
// app.use('/api', api);

// GET all videos

router.get('/video-list', (req, res, next) => {
  getAllVideos.get(
    (data) => {
      res.json({
        status: 200,
        statusText: 'OK',
        message: 'all Videos retrieved',
        data: data,
      });
    },
    (err) => {
      next(err);
    }
  );
});
// search video by name containing search word
router.get('/search', (req, res, next) => {
  const searchWord = req.query.word;
  console.log(searchWord);
  getAllVideos.search(
    searchWord,
    (data) => {
      if (data.length) {
        res.status(200).json({
          status: 200,
          statusText: 'OK',
          message: 'all Videos retrieved',
          data: data,
        });
      } else {
        res.status(404).json({
          status: 404,
          statusText: 'Not Found',
          message: `there is no data for the video with word ${searchWord}`,
          error: {
            code: 'Not Found',
            message: `there is no data for the video with id ${searchWord}`,
          },
        });
      }
    },
    (err) => {
      next(err);
    }
  );
});
// get video by id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  getAllVideos.getById(
    id,
    (data) => {
      if (data.length) {
        res.status(200).json({
          status: 200,
          statusText: 'OK',
          message: 'all Videos retrieved',
          data: data,
        });
      } else {
        res.status(404).json({
          status: 404,
          statusText: 'Not Found',
          message: `there is no data for the video with id ${id}`,
          error: {
            code: 'Not Found',
            message: `there is no data for the video with id ${id}`,
          },
        });
      }
    },
    (err) => {
      next(err);
    }
  );
});
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  getAllVideos.getById(
    id,
    (data) => {
      if (data.length) {
        getAllVideos.UpVote(id, (data) => {
          res.status(200).json({
            status: 200,
            statusText: 'OK',
            Message: `Vote Updated For id=${id}`,
            data: data,
          });
        });
      } else {
        res.status(404).json({
          status: 404,
          statusText: 'Not Found',
          message: `there is no data for the video with id ${id}`,
          error: {
            code: 'Not Found',
            message: `there is no data for the video with id ${id}`,
          },
        });
      }
    },
    (err) => {
      next(err);
    }
  );
});
app.listen(port, () => console.log(`Listening on port ${port}`));
