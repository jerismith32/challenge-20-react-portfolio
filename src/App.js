import React, { useState } from 'react';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Nav from './components/Nav/nav';
import Resume from './Pages/Resume/resume';
import Portfolio from './Pages/Portfolio/portfolio';
import Footer from './components/Footer/footer';

function App() {
  const [categories] = useState([
    {
      name: 'about'
    },
    { name: 'portfolio'},
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log('current Category', currentCategory);

  const renderDifferentPages = () => {
    switch(currentCategory) {
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      case 'resume':
        return <Resume />
      default:
        return <About />
    }
  } 

  return (
    <div>
      <Nav
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        {renderDifferentPages() }
      </main>
      <Footer />
    </div>
  );
}

export default App;