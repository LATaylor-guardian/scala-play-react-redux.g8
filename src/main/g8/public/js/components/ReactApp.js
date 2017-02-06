import React from 'react';
import Header from './Header';

export default class ReactApp extends React.Component {

  render() {

    return (
      <div className="page">
      /* <Header /> */
      
      <main className="container" role="main">
        <section>
          <h2>$name$</h2>
        </section>
      </main>

      </div>
    );
  }
}
