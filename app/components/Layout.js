import React from 'react';

import Contact from './Contact';
import data from './data';

class Layout extends React.Component {
  addContact = (e) => {
    //default 행동을 막는다 여기서 #로 이동
    e.preventDefault()
    console.log('clicked!');
  }

  render() {
    return (
      <div id='Layout'>
        <a href='#' className='pure-button' onClick={this.addContact}>Add Button</a>
        <div className='pure-g'>
          { data.map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;

