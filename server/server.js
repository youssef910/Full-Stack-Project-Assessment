const port = process.env.PORT || 5000;
const express = require('express');
const router = express.Router();
const getAllVideos = require('./videos');
// const bp = require('body-parser');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/api/', router);

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
router.put('/up-vote/:id', (req, res, next) => {
  const id = req.params.id;

  getAllVideos.getById(
    id,
    (data) => {
      if (data.length) {
        getAllVideos.upVote(id, (data) => {
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
router.put('/down-vote/:id', (req, res, next) => {
  const id = req.params.id;

  getAllVideos.getById(
    id,
    (data) => {
      if (data.length) {
        getAllVideos.downVote(id, (data) => {
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
router.post('/add-video', (req, res, next) => {
  const newData = req.body;
  getAllVideos.search(
    newData.title,
    (data) => {
      if (!data.length) {
        getAllVideos.addVideo(newData, (data) => {
          res.status(200).json({
            status: 200,
            statusText: 'OK',
            Message: `new Video Added`,
          });
        });
      } else {
        res.status(404).json({
          status: 404,
          statusText: 'failed to add',
          message: `Failed to Add`,
          error: {
            code: 'failed to add',
            message: `failed to add Video`,
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
