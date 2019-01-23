import styled from '@emotion/styled'

export const Container = styled.div`
    width: 92%;
    max-width: 140rem;
    margin: 4% auto;
    position: relative;
`

export const Intro = styled.div`
    width: 92%;
    max-width: 140rem;
`

export const IntroTitle = styled.h1`
    color: #F4D35E;
    font-family: 'Righteous';
    letter-spacing: 0.23rem;
    font-size: 1.6rem;
    margin-bottom: 2rem;
`

export const IntroSentence = styled.p`
    font-size: 42px;
    font-family: 'Patua One', sans-serif;
    line-height: 1.1;
    color: #FCFCFC;
`
export const IntroDivider = styled.div`
    height: 2px;
    width: 60px;
    background: #FFF;
    margin-top: 2rem;
`

export const BookContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 3rem;
    width: 100%;
`

export const Book = styled.div`
    width: 20%;
    position: relative:
    border-radius: 3rem 3rem 0.4rem 0.4rem;
    margin-right: 3rem;
    margin-bottom: 12rem;

    @media (max-width: 600px) {
        width: 50%;
        height: 100%;
    }
`

export const BookImage = styled.img`
    box-shadow: #333 -0.7rem 1.0rem 0.3rem;
    width: 100%;
    height: 75%;
    border-radius: 2rem;
    background: #F4D35E;


`
export const BookSynopsis = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 2.2rem;
    height: 36%;
    font-family: 'Patua One';
    font-size: 1.2rem;
    color: #FFF;
    background: #0094FF; 
    border-radius: 2rem;
    box-shadow: #333 -0.7rem 1.0rem 0.3rem;
    margin-top: 1rem;

    @media (max-width: 700px) {
        font-size: 0.33rem;
    }
`