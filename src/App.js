import './App.css';
import chroma from 'chroma-js';
import randomHex from 'random-hex';
import { useState } from 'react';

export default function App() {
  // const hexValue = randomHex.generate();

  const [randomHexValue, setRandomHexValue] = useState();
  const [boxSize, setBoxSize] = useState();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: '#4a69bd' }}>Your Random Color Generator</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <button
          className="button"
          onClick={() => {
            setRandomHexValue(randomHex.generate());
          }}
        >
          Generate
        </button>
      </div>
      <div
        style={{
          backgroundColor: randomHexValue,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
          marginLeft: '50px',
          marginRight: '50px',
          borderRadius: '10px',
          minHeight: '100px',
          justifyContent: 'center',
          maxWidth: boxSize,
        }}
      >
        Generated Color: {randomHexValue}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
          marginTop: '20px',
          marginLeft: '50px',
          marginRight: '50px',
          borderRadius: '10px',
          minHeight: '150px',
          borderColor: '#cccccc',
          borderWidth: '2px',
          borderStyle: 'solid',
          background: '#f1f2f6',
        }}
      >
        <label>
          Please enter a color:
          <input
            style={{
              paddingLeft: '2px',
              marginLeft: '20px',
              borderRadius: '3px',
              borderColor: '#cccccc',
            }}
            placeholder="Type the color hue"
            name="color-name"
            onChange={(event) => {
              const inputColor = event.currentTarget.value;
              if (chroma.valid(inputColor)) {
                setRandomHexValue(chroma(inputColor).hex());
              } else {
                setRandomHexValue('');
              }
            }}
          />
        </label>
        <label style={{ marginTop: '20px' }}>
          Please enter a luminocity "light" or "dark":
          <input
            style={{
              paddingLeft: '2px',
              marginLeft: '20px',
              borderRadius: '3px',
              borderColor: '#cccccc',
            }}
            placeholder="Type light or dark"
            name="color-luminocity"
            onChange={(event) => {
              const inputColor = event.currentTarget.value;
              if (chroma.valid(inputColor)) {
                setRandomHexValue(chroma(inputColor).hex());
              } else if (inputColor === 'dark') {
                setRandomHexValue(chroma(randomHexValue).darken().hex());
              } else if (inputColor === 'light') {
                setRandomHexValue(chroma(randomHexValue).brighten().hex());
              }
            }}
          />
        </label>
        <label style={{ marginTop: '20px' }}>
          Choose your color box size:
          <input
            style={{
              paddingLeft: '2px',
              marginLeft: '20px',
              borderRadius: '3px',
              borderColor: '#cccccc',
            }}
            placeholder='Type e.g. "100px"'
            name="color-box-size"
            onChange={(event) => {
              const userBoxSize = event.currentTarget.value;
              setBoxSize(userBoxSize);
            }}
          />
        </label>
      </div>
    </>
  );
}
