import React from 'react';
import styled from 'styled-components';

function Person() {
  return (
    <Wrapper>
      <div className='container'>
        <h2>Who are You</h2>
        <div className='flex'>
          <a>
            <button>Car Dealer</button>
          </a>
          <a>
            <button>Real Estate</button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Person;

const Wrapper = styled.section`
  .container {
    width: 100vw;
    height: 100vh;
    background-image: url('https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.jpg?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM=');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 49px;
    margin-top: -139px;
    color: white;
    text-align: center;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 33px;

    @media (min-width: 768px) {
      flex-direction: row;
      width: 80%;
    }

    @media (min-width: 1024px) {
      width: 60%;
    }
  }

  button {
    background-color: transparent;
    margin: 10px;
    width: 100%;
    max-width: 258px;
    height: 76px;
    font-size: 27px;
    font-weight: bold;
    border-radius: 16px;
    color: white;
    cursor: pointer;
    border: 2px solid white;
    transition: all 0.3s ease-in-out;

    @media (min-width: 768px) {
      width: 258px;
    }
  }

  button:hover {
    background-color: white;
    color: black;
    border: 2px solid white;
  }

  button:focus {
    outline: none;
  }
`;