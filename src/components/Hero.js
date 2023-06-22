import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          maximus mi. Sed mattis, lectus in tempor rhoncus, nulla metus
          malesuada lacus, vel dapibus elit dui quis ligula. Proin
        </p>
        <Link to="./products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working here" className="accent-img" />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
min-height:60vh;
display:grid;
border:1px solid blue;
place-items:center;
.img-container{
  display:none;
}
p{
  line-height:2;
  max-width:45rem;
  margin-bottom:2rem;
  color:var(--clr-grey-5;
  font-size:1rem;
}



`

export default Hero
