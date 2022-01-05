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
    console.log(form);
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
