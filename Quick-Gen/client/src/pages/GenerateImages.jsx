import { Image, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const GenerateImages = () => {

  const imageStyle = ['Realistic','Ghibli style','Anime style','Cartoon style','Fantasy style',
    'Realistic style','3D style','Portrait style'];

  const [selectedStyle, setSelectedStyle] = useState('Realistic');
  const [topic, setTopic] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const[Publish,setPublish]=useState(false);

  const onSubmitHandler = async () => {
  console.log(topic, selectedStyle);
  //for dummy images
  setGeneratedImage('https://picsum.photos/500/300');
  };

  return (
     <div className='h-full overflow-y-scroll p-6 text-slate-700'>
      
      {/* Two-column layout */}
      <div className='flex flex-col lg:flex-row gap-6'>

        {/* Left Column: Blog Input */}
        <div className='flex-1 max-w-lg p-4 bg-white border border-gray-200 rounded-lg'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-6 h-6 text-[#00AD25]' />
            <h1 className='text-xl font-semibold'>AI Image Generator </h1>
          </div>

          {/* Topic Input */}
          <p className='mt-6 text-sm font-medium'>Describe your Image</p>
          <textarea
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300'
          placeholder='Describe what you want to see in this image'
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          rows={4}
          required/>

          {/* Style  Selection */}
          <p className='mt-4 text-sm font-medium'>Style</p>
          <div className='mt-3 flex gap-3 flex-wrap sm:max-w-[90%]'>
            {imageStyle.map((item) => (
              <span 
                key={item}
                onClick={() => setSelectedStyle(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition
                  ${selectedStyle === item
                    ? 'bg-green-50 text-green-700 border-gray-300'
                    : 'text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                  }`}
              >
                {item} 
              </span>
            ))}
          </div>

            <div className='my-6 flex items-center gap-2'>
            <label className='relative cursor-pointer'>
              
              <input
                type='checkbox'
                onChange={(e) => setPublish(e.target.checked)}
                checked={Publish}
                className='sr-only peer'
              />
              <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>

              <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>

            </label>
            <p className='text-sm'>Make this image Public</p>
          </div>
          {/* Generate Button */}
          <button
            type='button'
             onClick={onSubmitHandler}
            className='w-full flex justify-center items-center gap-2
              bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg
              cursor-pointer hover:scale-105 transition-transform'
          >
            <Image className='w-5' />
            Generate Image
          </button>
        </div>

        {/* Right Column: Generated Image */}
        <div className='flex-1 max-w-lg p-4 bg-white border border-gray-200 rounded-lg flex flex-col min-h-[300px]'>
          <div className='flex items-center gap-3'>
            <Image className='w-5 h-5 text-[#00AD25]' />
            <h1 className='text-xl font-semibold'>Generated Image</h1>
          </div>

          <div className='flex-1 flex justify-center items-center mt-4'>
            {generatedImage ? (
              <img 
                src={generatedImage} 
                alt="Generated"
                className='w-full rounded-lg'
              />
            ) : (
              <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                <p>Enter a Topic and click "Generate Image" to get started.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GenerateImages;
