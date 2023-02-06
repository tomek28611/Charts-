import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Download = () => {
  return (

    <Form>
    <Form.Group className="mb-3 p-4" controlId="form">
      <Form.Label>Choose TXT file</Form.Label>
      <Form.Control type="file"  />
      <Form.Text className="text-red-500">
        Only .txt file.
      </Form.Text>
    </Form.Group>

    <Button className='ml-8' variant="primary" type="submit">
      Submit
    </Button>
  </Form>

  )


}





export default Download