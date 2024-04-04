import React, { useState } from "react";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle item selection
  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    // Perform any other action upon item selection
    // For example, you can update state, make API calls, etc.
    toggleDropdown(); // Close dropdown after item selection (optional)
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Profile
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick("Item 1")}>User</li>
          <li onClick={() => handleItemClick("Item 2")}>Setting</li>
          <li onClick={() => handleItemClick("Item 3")}>Log Out</li>
          {/* Add more items as needed */}
        </ul>
      )}
    </div>
  );
};

export default Profile;
