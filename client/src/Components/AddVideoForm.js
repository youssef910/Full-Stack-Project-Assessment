import React, { useState } from 'react';

const AddVideoForm = () => {
  const initialState = { title: '', url: '' };
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/add-video', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => console.log(res.json()));
    setForm(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label fw-bolder'>
          Video title
        </label>
        <input
          name='title'
          type='text'
          value={form.title}
          className='form-control'
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label type='url' className='fw-bold'>
          Video Link
        </label>
        <input
          name='url'
          className='form-control'
          value={form.url}
          id='exampleInputPassword1'
          onChange={handleChange}
        />
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default AddVideoForm;
