import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the server
      const response = await axios.post('https://nunu-alpha.vercel.app/api/contact', formData);
      console.log(response.data);
      // Reset form after successful submission
      setFormData({ fullName: '', email: '', message: '' });
      // Show success message to the user (optional)
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message to the user (optional)
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={formData.email} onChange={handleChange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <input type="text" className="form-control" id="message" name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default App;
