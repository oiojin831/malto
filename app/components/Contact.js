import React from 'react';

const Contact = ({name, email}) =>
  <div className='pure-u-1-3'>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>;

export default Contact;

