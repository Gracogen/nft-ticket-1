import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const CreateEventMiniPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
    category: '',
    regularTicket: '',
    vipTicket: '',
    ticketStock: '',
    location: '',
    date: '',
    time: '',
    royalties: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const categories = ['Conference', 'Workshop', 'Seminar', 'Exhibition'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const validateForm = () => {
    const requiredFields = ['name', 'description', 'category', 'location', 'date', 'time'];
    return requiredFields.every((field) => formData[field].trim() !== '');
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill all required fields.');
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      // Simulate API call (replace with actual endpoint)
      // await axios.post('your-backend-endpoint', formDataToSend, {
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // });
      console.log('Form data submitted:', Object.fromEntries(formDataToSend));
      setSuccessMessage('Your event has been created');
      setFormData({
        name: '',
        description: '',
        image: null,
        category: '',
        regularTicket: '',
        vipTicket: '',
        ticketStock: '',
        location: '',
        date: '',
        time: '',
        royalties: '',
      });
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="fixed top-0 right-0 w-156 overflow-visible bg-white shadow-lg transform translate-x-0 transition-transform duration-300 z-50 p-7">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Create Event</h3>
        <button onClick={onClose} className="text-gray-500">&times;</button>
      </div>
      <h6 className='text-sm'>Enter details of your event here. Click “create” when you're done.</h6>
      <form onSubmit={handleCreateEvent} className="space-y-4 mt-7">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-3 block  w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter name of your event here. Click 'create' when you're done."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description<span className="text-red-500">*</span></label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-3 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter description"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image<span className="text-red-500">*</span></label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
          {formData.image && <img src={URL.createObjectURL(formData.image)} alt="Preview" className="mt-2 w-full h-32 object-cover" />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category<span className="text-red-500">*</span></label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Regular Ticket($)</label>
            <input
              type="number"
              name="regularTicket"
              value={formData.regularTicket}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">VIP Ticket($)</label>
            <input
              type="number"
              name="vipTicket"
              value={formData.vipTicket}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ticket Stock</label>
            <input
              type="number"
              name="ticketStock"
              value={formData.ticketStock}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Location<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date<span className="text-red-500">*</span></label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time<span className="text-red-500">*</span></label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Royalties(%)<span className="text-red-500">*</span></label>
          <input
            type="number"
            name="royalties"
            value={formData.royalties}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Create
          </button>
        </div>
      </form>

      {/* Success Popup */}
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded shadow-lg z-60">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default CreateEventMiniPage;