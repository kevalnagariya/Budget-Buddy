// Import necessary tools from React and icons from react-icons
import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'; // Icons for user, upload, and delete
import Input from './input'; // Not used in this component, but may be a leftover import

// This component lets users choose and preview a profile picture
const ProfilePhotoSelector = ({ image, setImage }) => {
  
  // Ref for the hidden file input so we can trigger it programmatically
  const inputRef = useRef(null);

  // This state holds the image preview URL
  const [previewUrl, setPreviewUrl] = useState(null);

  // When user selects a file (image), this function runs
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      // Update the state with the selected image file
      setImage(file);

      // Create a preview URL so the image can be displayed on screen
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  // Clears the selected image and removes the preview
  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  // When the user clicks the upload icon, this will trigger the hidden input field
  const onChooseFile = () => {
    inputRef.current.click(); // Programmatically "click" the hidden file input
  };

  return (
    // Container for the photo selector
    <div className='flex justify-center mb-6'>
      
      {/* Hidden file input field (image upload) */}
      <input
        type='file'
        accept='image/*' // Accept only image files
        ref={inputRef} // Attach the ref so we can trigger it
        onChange={handleImageChange} // Call when user picks a file
        className='hidden' // Hide the input field visually
      />

      {/* If no image is selected yet, show a default avatar + upload button */}
      {!image ? (
        <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative'>
          {/* Placeholder user icon */}
          <LuUser className='text-4xl text-primary' />

          {/* Upload button (small icon button) positioned at bottom-right */}
          <button
            type="button"
            className='w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1'
            onClick={onChooseFile}
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        // If image is selected, show the preview image + delete button
        <div className='relative'>
          <img
            src={previewUrl} // Preview image from state
            alt="profile photo"
            className='w-20 h-20 rounded-full object-cover' // Make it round and cover the box
          />

          {/* Button to remove the selected image */}
          <button
            type='button'
            className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1'
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfilePhotoSelector
