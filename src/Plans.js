import React from 'react'
import styled from 'styled-components'
import { RxSwitch } from "react-icons/rx";
const Plans = () => {
    return (
        <Wrapper>

            <div className='container'>
                <h2 className='head'>Choose a plain that works for your bussiness</h2>
                <h2 className='head2'>  <span>Monthly</span>   <RxSwitch />           <span>Yearly</span>        </h2>


                <div className='myFlex'>

                    <div className='flex1'>
                        <h3 className='line'>Basic</h3>
                        <p>Start your Business</p>
                        <h4>$30</h4>
                        <button className='btn1'>Buy Now</button>
                        <button className='btn2'>Free trial</button>

                    </div>


                    <div className='flex1'>

                        <h3 className='line'> Essential</h3>
                        <p>Run your Business</p>
                        <h4>$50</h4>
                        <button className='btn1'>Buy Now</button>
                        <button className='btn2'>Free trial</button>

                    </div>


                    <div className='flex1'>

                        <h3 className='line'>Plus</h3>
                        <p>Grow your Business</p>
                        <h4>$80</h4>
                        <button className='btn1'>Buy Now</button>
                        <button className='btn2'>Free trial</button>

                    </div>

                </div>

            </div>

        </Wrapper>
    )
}

export default Plans

const Wrapper = styled.section`

html {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  
  /* Set font family and background color for the whole page */
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
  }
  
  .container {
    /* Center the container */
    margin: 0 auto;
    max-width: 1200px;
    padding: 30px;
  }
  
  .head {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .head2 {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .head2 span {
    margin: 0 10px;
  }
  
  .myFlex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 1000px;
  }
  
  .flex1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    height: 500px;
    margin-bottom: 30px;
    background-color: #e0dee0;
    border-radius: 35px;
    box-shadow: 10px 10px 5px gray;
  }
  
  .line {
    border-bottom: 4px solid black;
    font-size: 2rem;
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  
  p {
    font-size: 1rem;
    margin-top: -10px;
    text-align: center;
  }
  
  h4 {
    font-size: 2rem;
    margin-top: -10px;
    text-align: center;
  }
  
  .btn1 {
    font-size: 1.25rem;
    width: 125px;
    padding: 10px;
    color: white;
    background-color: #6f83a1;
    border-radius: 21px;
    margin-top: -8px;
    cursor:pointer;
  }
  
  .btn2 {
    font-size: 1rem;
    width: 182px;
    padding: 10px;
    color: black;
    background-color: white;
    margin-top: 15px;
    border-radius: 25px;
    cursor:pointer;

  }
  
  /* Media query for screens smaller than 768px */
  @media screen and (max-width: 768px) {
    .head {
      font-size: 2rem;
      margin-bottom: 10
`