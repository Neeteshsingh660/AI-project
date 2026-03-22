import { Eraser, Sparkles } from 'lucide-react';
import React, { useState, useEffect } from 'react'

const RemoveBackground = () => {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [fileName, setFileName] = useState("No file chosen");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
       setFileName(file.name);
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) return;

    console.log("Image:", image);
  };
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className='h-full overflow-y-scroll p-6 text-slate-700'>
      
      {/* Two-column layout */}
      <div className='flex flex-col lg:flex-row gap-6'>

        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg
          border border-gray-200'>
            
         {/* Left Column: Blog Input */}
          <div className='flex items-center gap-3'>
            <Sparkles className='w-6  text-[#FF4938]' />
            <h1 className='text-xl font-semibold'>Background Remover</h1>
          </div>

          {/* Topic Input */}
          <p className='mt-6 text-sm font-medium'>Upload Image</p>

          <label className="w-full flex justify-between items-center p-2 px-3 mt-2 text-sm rounded-md border border-gray-300 cursor-pointer text-gray-600 hover:border-blue-400">
            
            <span className="truncate">{fileName}</span>

            <span className="text-blue-500 font-medium">Choose</span>
          <input
            type='file'
            onChange={handleImageChange}
            className="hidden"
            accept='image/*'
            required/>
            </label>

          <p className='text-xs text-gray-500 font-light mt-1'>
            Supports JPG, PNG, and other image formats</p>

          {/* Generate Button */}
          <button
            type='button'
            onClick={onSubmitHandler}
            className='w-full flex justify-center items-center gap-2
              bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg
              cursor-pointer hover:scale-105 transition-transform'
          >
            <Eraser className='w-5' />
           Remove background
          </button>
        </form>


        {/* Right Column: Generated Titles */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
          <div className='flex items-center gap-3'>
            <Eraser className='w-5 h-5 text-[#FF4938]' />
            <h1 className='text-xl font-semibold'>Processed Image</h1>
          </div>
          
          <div className='flex-1 flex justify-center items-center mt-4'>
             {preview ? (
              <img 
                src={preview} 
                alt="preview"
                className='w-full max-h-[300px] object-contain rounded-lg'
                />
             ) :(
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Eraser className='w-9 h-9'/>
                <p>Upload an image and click "Remove Background" to get started</p>
          </div>
             )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RemoveBackground;
