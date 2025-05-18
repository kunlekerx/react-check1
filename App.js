import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Astro"; // Change to "" to test fallback

function App() {
  return (
    <Container className="py-5 d-flex flex-column align-items-center">
      <Card style={{ width: '22rem', backgroundColor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        <h4>
          Hello, {firstName ? firstName : "there"}!
        </h4>
        {firstName && (
          <img 
            src="https://via.placeholder.com/100.png?text=👋" 
            alt="Greeting" 
            style={{ marginTop: '10px' }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
