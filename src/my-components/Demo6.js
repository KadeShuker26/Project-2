// Import React
import React from 'react';

// CLASS COMPONENT
export class Demo6 extends React.Component {
  render() {
    return (
      <div style={demoStyle}>
        <div style={contentStyle}>
          <h5 style={headingStyle}>Statement of Authenticity</h5>
          <p style={paragraphStyle}>I confirm that:</p>
          <ul style={listStyle}>
            <li>This is an original assessment and is entirely my own work.</li>
            <li>It contains no material previously published or written by another person or myself except where due acknowledgement is made in the text.</li>
            <li>No material which to a substantial extent, has been submitted for any other academic course, is included without acknowledgement.</li>
          </ul>
        </div>
      </div>
    );
  }
}

// Define CSS variables
const demoStyle = {
  minHeight: '70vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f8f9fa',
};

const contentStyle = {
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Max width for better readability
  margin: '0 auto', // Center the content block
  padding: '20px',
  border: '1px solid #dee2e6', // Light border for emphasis
  borderRadius: '5px', // Slightly rounded corners
  backgroundColor: '#ffffff', // White background for content
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Subtle shadow for depth
};

const headingStyle = {
  fontWeight: 'bold',
  marginBottom: '10px', // Space below heading
};

const paragraphStyle = {
  fontStyle: 'italic', // Italicize the introductory sentence
  marginBottom: '10px', // Space below paragraph
};

const listStyle = {
  listStyleType: 'disc', // Bullet points
  paddingLeft: '20px', // Indentation for list
};

// Export this Component
export default Demo6;
