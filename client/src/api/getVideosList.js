import axios from 'axios';
const getAllVideos = async () => {
  try {
    const {
      data: { data },
    } = await axios.get('http://localhost:5000/api/video-list');
    return data;
  } catch (error) {
    console.log(error);  
  }
  // fetch(`http://localhost:5000/api/video-list`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.data);
  //     return data.data; 
  // });
};

export default getAllVideos;
