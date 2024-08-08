// src/components/AudioLibrary.js
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import axiosInstance from '../requestMethods';

const Waveform = () => {
  const [audio, setAudio] = useState([]);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axiosInstance.get('/podcast/');
        const data = await response.data;

        if (Array.isArray(data)) {
          setAudio(data);
        } else {
          console.error('Expected an array but got:', data)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAudio();
  }, []);

  return (
    <section className='pt-32 flex flex-wrap justify-center'>
      {audio.map((audio) => (
        <div key={audio._id} className='bg-red-200 h-auto xl:w-96 lg:w-96 md:w-72 sm:w-80 w-full p-5 rounded-lg mt-2 mx-2'>
          <h1 className='uppercase font-bold'>{audio.title}</h1>
          <p className='font-semibold pt-2'>{audio.description}</p>
          <p className='font-semibold pt-2'>{audio.producers}</p>
          <ReactAudioPlayer 
            src={audio.audioUrl}
            type="audio/mpeg"
            controls
            className='pt-3 w-full'
          />
        </div>
      ))}
    </section>
  );
};

export default Waveform;
