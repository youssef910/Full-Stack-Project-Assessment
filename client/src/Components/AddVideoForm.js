import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

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
    <Container style={{ backgroundColor: 'black', color: 'white' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Video Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Video Title'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>URL</Form.Label>
          <Form.Control
            type='text'
            placeholder='Video URL'
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Add Video
        </Button>
      </Form>
    </Container>
  );
};

export default AddVideoForm;
