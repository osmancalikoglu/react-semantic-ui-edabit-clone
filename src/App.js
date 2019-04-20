import React, { Component } from 'react';
import PageHeader from './PageHeader';
import MainContent from './MainContent';
import ContentLanguages from './ContentLanguages';
import Quotes from './Quotes';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <>
        <>
          <PageHeader />
          <MainContent />
          <ContentLanguages />
          <Quotes />
          <Footer />
        </>
      </>
    );
  }
}

export default App;
