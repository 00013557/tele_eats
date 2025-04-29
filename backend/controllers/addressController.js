import Address from '../models/addressModel.js';
import User from '../models/userModel.js'; 

// Controller function to add a new address
const addAddress = async (req, res) => {
  const { userId, street, district, city } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new address
    const newAddress = new Address({
      userId,
      street,
      district,
      city,
    });

    // Save the address to the database
    await newAddress.save();

    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding address" });
  }
};

// Controller function to get all addresses for a user
const getUserAddresses = async (req, res) => {
  const { userId } = req.body;  // Assuming userId is passed from the frontend

  try {
    // Fetch all addresses for the specified user
    const addresses = await Address.find({ userId });

    if (addresses.length === 0) {
      return res.status(404).json({ message: "No addresses found" });
    }

    // Return the addresses to the client
    res.json({ success: true, data: addresses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching addresses" });
  }
};

// Controller function to update an address
const updateAddress = async (req, res) => {
  const { id } = req.params;  // Get the address ID from the URL
  const { street, district, city } = req.body;  // Get the updated address details from the request body

  try {
    // Find the address by ID and update it
    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      { street, district, city },
      { new: true }  // Return the updated address
    );

    if (!updatedAddress) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }

    res.json({ success: true, data: updatedAddress });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error updating address" });
  }
};

// Controller function to delete an address
const deleteAddress = async (req, res) => {
  const { id } = req.params;  // Get the address ID from the URL

  try {
    // Find the address by ID and delete it
    const deletedAddress = await Address.findByIdAndDelete(id);

    if (!deletedAddress) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }

    res.json({ success: true, message: "Address deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleting address" });
  }
};

export { addAddress, getUserAddresses, updateAddress, deleteAddress };
