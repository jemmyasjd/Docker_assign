import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`

  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const AcademicForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    number: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/students', formData);
      console.log(response.data);
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <FormContainer>
      <p style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Fill the Student Details</p>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        
        <Label htmlFor="grade">Grade</Label>
        <Input type="number" id="grade" name="grade" placeholder="Enter your grade" value={formData.grade} onChange={handleChange} />
        
        <Label htmlFor="number">Roll Number</Label>
        <Input type="text" id="number" name="number" placeholder="Enter your roll  number" value={formData.number} onChange={handleChange} />
        
        <Label htmlFor="course">Courses</Label>
        <Input type="text" id="course" name="course" placeholder="Enter a course" value={formData.course} onChange={handleChange} />
        
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default AcademicForm;
