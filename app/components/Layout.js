import React from 'react';

const data = [
  { name: 'eung jin', email: 'oiojin@gmail.com' },
  { name: 'jeff', email: 'jeff@gmail.com' },
  { name: 'allison', email: 'allison@gmail.com' },
];

// const Contact = (props) =>
//   <h2>{props.name}</h2>
//   <p>{props.email}</p>
const Contact = ({name, email}) =>
  <div className='pure-u-1-3'>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>;

class Layout extends React.Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
        { data.map(info =>
          <Contact {...info} />
          //<Contact name={info.name} email={info.email} />
        )}
      </div>
    );
  }
}

export default Layout;

