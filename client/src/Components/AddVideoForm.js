import React, { useState } from 'react';
import { Form, Button, Container, Modal } from 'react-bootstrap';
import { addVideo } from '../api/VideoListManagement';

const AddVideoForm = () => {
  const [show, setShow] = useState(false);
  const initialState = { title: '', url: '' };
  const [form, setForm] = useState(initialState);
  const [color, setColor] = useState('green');
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(form).then((res) =>
      res.statusText === 'OK'
        ? (setForm(initialState), setSuccess(true))
        : (setSuccess(false), setColor('red'))
    );
    handleShow();
  };

  const handleClose = () => {
    setShow(false);
    document.location.href = '/';
  };
  const handleShow = () => setShow(true);

  return (
    <Container className='app'>
      {!show ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Video Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={form.title}
              placeholder='Enter Video Title'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>URL</Form.Label>
            <Form.Control
              type='text'
              name='url'
              value={form.url}
              placeholder='Video URL'
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant='primary' type='submit' onClick={handleSubmit}>
            Add Video
          </Button>
        </Form>
      ) : (
        <Modal
          show={show}
          style={{ color: `${color}` }}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title success>
              {success ? 'Video Added' : `something Went wrong`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ colour: 'green' }}>
            {' '}
            {success
              ? 'your video have been successfully added!'
              : 'Failed to ADd video'}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant={success ? 'success' : 'danger'}
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default AddVideoForm;
