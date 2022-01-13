import React, { useState } from 'react';
import {
  Grommet,
  Box,
  Button,
  Form,
  FormField,
  Layer,
  TextInput,
  MaskedInput,
  Text,
  Heading,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { addVideo } from '../api/VideoListManagement';
import { CircleInformation, FormClose, StatusGood } from 'grommet-icons';

const AddVideoForm = () => {
  const [show, setShow] = useState();
  const initialState = { title: '', url: '' };
  const [form, setForm] = useState(initialState);
  const [color, setColor] = useState('#5CDB95');
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
        : (setSuccess(false), setColor('#FC4445'))
    );
    handleShow();
  };

  const handleClose = () => {
    setShow(undefined);
    window.location.href = '/';
  };
  const handleShow = () => {
    setShow(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <Grommet full theme={grommet}>
      <Box fill align='center' justify='center'>
        <Heading level={2} color='brand'>
          Add Video
        </Heading>
        <Box width='medium'>
          <Form onSubmit={handleSubmit}>
            <FormField
              value={form}
              label='Video Title'
              onChange={handleChange}
              name='title'
              required
            >
              <TextInput name='title' type='name' />
            </FormField>

            <FormField
              value={form}
              label='Video URL'
              onChange={handleChange}
              name='url'
              required
            >
              <MaskedInput
                name='url'
                type='url'
                mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
              />
            </FormField>

            <Box direction='row' justify='between' margin={{ top: 'medium' }}>
              <Button type='reset' label='Reset' />
              <Button type='submit' label='Add Video' primary />
            </Box>
          </Form>
        </Box>
      </Box>
      {show && (
        <Layer
          position='bottom'
          modal={false}
          margin={{ vertical: 'medium', horizontal: 'small' }}
          onEsc={handleClose}
          responsive={false}
          plain
        >
          <Box
            align='center'
            direction='row'
            gap='small'
            justify='between'
            round='medium'
            elevation='medium'
            pad={{ vertical: 'xsmall', horizontal: 'small' }}
            background={color}
          >
            <Box align='center' direction='row' gap='xsmall'>
              {success ? <StatusGood /> : <CircleInformation />}
              <Text>
                {success
                  ? 'your video have been successfully added!'
                  : 'Failed to Add video'}
              </Text>
            </Box>
            <Button icon={<FormClose />} onClick={handleClose} plain />
          </Box>
        </Layer>
      )}
    </Grommet>
  );
};

export default AddVideoForm;
