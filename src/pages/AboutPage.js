import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              maximus mi. Sed mattis, lectus in tempor rhoncus, nulla metus
              malesuada lacus, vel dapibus elit dui quis ligula. Proin id
              aliquam erat. Ut vehicula, nisi ut cursus gravida, lorem lorem
              feugiat massa, et ornare odio elit et metus. Integer quis semper
              arcu. Integer facilisis aliquam felis, quis vehicula nunc dictum
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
