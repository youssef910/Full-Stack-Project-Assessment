// import axios from 'axios';
export const getAllVideos = () => {
  return fetch('http://localhost:5000/api/video-list').then((res) =>
    res.json()
  );
};

export const upVote = (id) =>
  fetch(`http://localhost:5000/api/up-vote/${id}`, {
    method: 'PUT',
  }).then((res) => res.json());

export const downVote = (id) =>
  fetch(`http://localhost:5000/api/down-vote/${id}`, {
    method: 'PUT',
  }).then((res) => res.json());

export const sort = (sorter) =>
  fetch(`http://localhost:5000/api/sort/${sorter}`).then((res) => res.json());

export const search = (searchWord) =>
  fetch(`http://localhost:5000/api/search?word=${searchWord}`).then((res) =>
    res.json()
  );
