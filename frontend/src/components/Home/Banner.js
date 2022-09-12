import React from "react";
import logo from "../../imgs/logo.png";
import Inputbox from '../Inputbox.tsx';

const Banner = () => {
  
  function SearchIcon() {
    return (
      <span
        style={{
          top: '5px',
          color: '#af93f2',
          position: 'relative',
        }}
        class="material-symbols-outlined"
      >search</span>
    );
  }  

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <Inputbox 
            id="search-box"
            placeholder='What is it that you truly desire?'
            inputBoxStyle={{
              border: 'none',
              outline: 'none',
              margin: '0em 0.3em',
              padding: '0.5em',
              borderRadius: '0.4em',
              width: '20em',
              background: 'white',
              height: '1em'
            }}
            style={{
              margin: '0em 0.3em',
              padding: '0.5em',
              borderRadius: '0.4em',
              width: '20em',
              background: 'white',
            }}
            inputThreshold={3}
            onChange={() => {
              console.log('hello')
            }}
            icon={SearchIcon}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
