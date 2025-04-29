import React, { useEffect, useState, useContext } from 'react';
import './MyAddress.css';  // Import custom CSS styles
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const MyAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const { url, token } = useContext(StoreContext);

  const fetchAddresses = async () => {
    try {
      const response = await axios.post(url + '/api/addresses', {}, { headers: { token } });
      setAddresses(response.data.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const response = await axios.delete(`${url}/api/addresses/${addressId}`, { headers: { token } });
      
      if (response.data.success) {
        console.log('Address deleted:', addressId);
        // Remove the deleted address from the state to reflect the change
        setAddresses(addresses.filter(address => address._id !== addressId));
      } else {
        console.error('Error deleting address:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);  // Set the address to edit
  };

  const handleAddAddress = () => {
    setEditingAddress({ street: '', district: '', city: '' });  // Clear form for new address
  };

  useEffect(() => {
    if (token) {
      fetchAddresses();
    }
  }, [token]);

  return (
    <div className='my-addresses'>
      <h2>My Addresses</h2>
      <button className="add-address-button" onClick={handleAddAddress}>Add New Address</button>
      <div className="container">
        {addresses.length > 0 ? (
          addresses.map((address, index) => (
            <div key={index} className='my-addresses-item'>
              <p><strong>Street:</strong> {address.street}</p>
              <p><strong>District:</strong> {address.district}</p>
              <p><strong>City:</strong> {address.city}</p>
              <button className="track-button" onClick={() => handleEditAddress(address)}>Edit Address</button>
              <button className="delete-button" onClick={() => handleDeleteAddress(address._id)}>Delete Address</button>
            </div>
          ))
        ) : (
          <p>No saved addresses found. Add one to manage your orders.</p>
        )}
      </div>

      {/* Add/Edit Address Form */}
      {editingAddress && (
        <div className="edit-address-form">
          <h3>{editingAddress._id ? 'Edit Address' : 'Add New Address'}</h3>
          <form>
            <label>Street:</label>
            <input
              type="text"
              value={editingAddress.street}
              onChange={(e) => setEditingAddress({ ...editingAddress, street: e.target.value })}
            />
            <label>District:</label>
            <input
              type="text"
              value={editingAddress.district}
              onChange={(e) => setEditingAddress({ ...editingAddress, district: e.target.value })}
            />
            <label>City:</label>
            <input
              type="text"
              value={editingAddress.city}
              onChange={(e) => setEditingAddress({ ...editingAddress, city: e.target.value })}
            />
            <button
              type="button"
              onClick={async () => {
                if (editingAddress._id) {
                  // Edit existing address
                  try {
                    await axios.put(`${url}/api/addresses/${editingAddress._id}`, editingAddress, {
                      headers: { token }
                    });
                    fetchAddresses();  // Refresh the addresses
                    setEditingAddress(null);  // Close the form
                  } catch (error) {
                    console.error('Error updating address:', error);
                  }
                } else {
                  // Add new address
                  try {
                    await axios.post(`${url}/api/addresses/add`, editingAddress, {
                      headers: { token }
                    });
                    fetchAddresses();  // Refresh the addresses
                    setEditingAddress(null);  // Close the form
                  } catch (error) {
                    console.error('Error adding address:', error);
                  }
                }
              }}
            >
              {editingAddress._id ? 'Save Changes' : 'Add Address'}
            </button>
            <button
              type="button"
              onClick={() => setEditingAddress(null)}  // Close the form
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyAddresses;
