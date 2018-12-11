import React, { Component } from 'react'
import './App.css'
import { Container, Intro, IntroTitle, IntroSentence, IntroDivider, BookContainer, Book, BookImage, BookSynopsis } from './styles'
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

class App extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            books {
              _id
              title
              synopsis
              coverImage {
                url
              }
            }
          }`
        }
      });

      this.setState({ books: response.data.books });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { books } = this.state;


    return (
      <Container>
        <Intro>
          <IntroTitle>BOOKSTAND</IntroTitle>
          <IntroSentence>Always reading; always learning; always expanding your mind</IntroSentence>
          <IntroDivider></IntroDivider>
        </Intro>
        <BookContainer>
          {books.map(book => (
            <Book key={ book._id }>
              <BookImage src={`${apiUrl}${book.coverImage.url}`}></BookImage>
            </Book>
          ))}
          <BookContainer>
          {books.map(book => (
            <Book key={ book._id }>
              <BookSynopsis>
                <p>{ book.synopsis }</p>
              </BookSynopsis>
            </Book>
          ))}
        </BookContainer>
      </BookContainer>
      </Container>
    )
  }
}

export default App;
