import styled from '@emotion/styled'

export const Container = styled.div`
    width: 92%;
    max-width: 1400px;
    margin: 4% auto;
`

export const Intro = styled.div`
    width: 92%;
    max-width: 1400px;
`

export const IntroTitle = styled.h1`
    color: #F4D35E;
    font-family: 'Helvetica';
    letter-spacing: 0.23rem;
    font-size: 16px;
`

export const IntroSentence = styled.p`
    font-size: 42px;
    font-family: 'Arial';
    line-height: 1.1;
    color: #FCFCFC;
`
export const IntroDivider = styled.div`
    height: 2px;
    width: 60px;
    background: #FFF;
    margin-top: 20px;
`

export const BookContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 30px;
    width: 100%;
`

export const Book = styled.div`
    width: 20%;
    position: relative:
    border-radius: 30px 30px 4px 4px;
    margin-right: 30px;
    margin-bottom: 30px;
`

export const BookImage = styled.img`
    box-shadow: #333 -0.7rem 1.0rem 0.3rem;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: #F4D35E;
`
export const BookSynopsis = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 22px;
    height: 87%;
    font-family: 'Josefin Sans';
    font-size: 12px;
    color: #FFF;
    padding-bottom: 10px;
    background: #8338EC; 
    border-radius: 20px;
    box-shadow: #333 -0.7rem 1.0rem 0.3rem;
    margin-top: -15px;

    @media (max-width: 600px) {
        font-size: 8px;
    }

    @media (max-width: 530px) {
        font-size: 6px;
      }
    
`