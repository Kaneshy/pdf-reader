'use client'
import { ready } from '@/actions/books-action';
import React, { useState } from 'react';

const PageTest = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
  };

  const handleSubmit = async () => {
    if (!selectedVideo) {
      console.log("No video selected!");
      return;
    }

    // Assuming ready() function expects a video file
    const data = await ready(selectedVideo);
    console.log(data);
  };

  return (
    <main className='bg-white w-full min-h-screen text-black mt-48'>
      <label htmlFor=""></label>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button className='text-black' onClick={handleSubmit}>Submit</button>
    </main>
  );
};

export default PageTest;