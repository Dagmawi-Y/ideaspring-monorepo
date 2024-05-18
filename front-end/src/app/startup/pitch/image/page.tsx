"use client"
import React, { useState } from 'react';
import "../Form/form.css"
import "./style.css"
import { RiArrowRightLine } from 'react-icons/ri';

const App = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [bannerColor, setBannerColor] = useState('#fbc289'); // Initial banner color

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleColorChange = (event) => {
    setBannerColor(event.target.value);
  };
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };
  const [selectedSource, setSelectedSource] = useState('');

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const renderInputElements = () => {
    if (selectedSource === 'youtube') {
      return (
        <>
          <input type="text" placeholder="Enter YouTube ID" className='input'/>
          <button className='button'>Add Video</button>
        </>
      );
    } else if (selectedSource === 'vimeo') {
      return (
        <>
          <input type="text" placeholder="Enter Vimeo ID" className='input' />
          <button className='button'>Add Video</button>
        </>
      );
    } else if (selectedSource === 'upload') {
      return <input type="file" className='input' style={{outline:"none"}}/>;
    }
  };
 
  return (
    <div className="app">
      <form >
        <h1>Image and Video</h1>
        <h2 className='h2' style={{width:"690px"}}>a</h2>
        <h3>60% complete</h3>
        <div className="col">
          <div className="formpage">
            <p className='page'>"Nearly there! Images and videos are often the difference for the most successful pitches on our site. Investors, like everyone, respond really well to visuals. So give your pitch the best chance to stand out and drop in some relevant images."</p>
            <div className="upload-logo">
            <p className="logo-text">Logo</p>
            <div className="upload-section">
            <input type="file" onChange={handleFileChange} placeholder='Upload your logo' />
            </div>
        </div>
        <div className="upload-banner">
        <div className="banner-content">
            <p className="banner-text">Banner Image</p>
            <div className='section'>
            <div className="upload-sections">
                <p> Upload an Image</p>
            <input type="file" onChange={handleImageChange} accept="image/*" />
            <p>
                {selectedImage ? (
                <span>Selected: {selectedImage.name}</span>
                ) : (
                <span>Upload your banner image</span>
                )}
            </p>
            </div>
            <p>OR</p>
            <div className="color-picker">
            <label htmlFor="bannerColor">Choose Banner Color:</label>
            <input
                type="color"
                id="bannerColor"
                value={bannerColor}
                onChange={handleColorChange}
            />
            </div>
        </div>
        </div>
      </div>
      <p className="banner-text">Video</p>
      <div className="containern">
      <p style={{marginBottom: "10px"}}>Insert the video ID below</p>
      <p style={{marginBottom: "10px"}}>ID Examples: YouTube = EKyirtVHsK0 and Vimeo = 76357912</p>
      <div className="radioGroup">
        <label>
          <input
            type="radio"
            name="source"
            value="youtube"
            checked={selectedSource === 'youtube'}
            onChange={handleSourceChange}
          />
          YouTube
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="vimeo"
            checked={selectedSource === 'vimeo'}
            onChange={handleSourceChange}
          />
          Vimeo
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="upload"
            checked={selectedSource === 'upload'}
            onChange={handleSourceChange}
          />
          Upload
        </label>
      </div>
      <div className="inputContainer">{renderInputElements()}</div>
    </div>
            <button type="submit">Submit</button>
          </div>
          <div className="image" >
            <div className="explore__card">
              <span>
                <i className="ri-heart-pulse-fill"></i>
              </span>
              <img src="/upload.webp" alt="logo" />
              <p>
          Offers a dedicated section or feature on the website to showcase selected Entrepreneurs to a broader audience, including potential investors, industry experts, and the Entrepreneurs community at large.
          </p>
          <a href="#" style={{color:"#f88630"}}>Join Now <RiArrowRightLine /></a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;