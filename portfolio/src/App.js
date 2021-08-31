import React, { useState } from 'react';
import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Nav from './components/Nav/nav';
import Resume from './components/Resume/resume';
import Work from './components/Work/work';

// function App() {
//   return (
//     <>
//       <Nav />
//       <Contact />
//     </>
//   );
// }

// export default App;


function App() {
  const [categories] = useState([
    {
      name: 'about'
    },
    { name: 'work'},
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log('current Category', currentCategory);

  const renderDifferentPages = () => {
    switch(currentCategory) {
      case 'about':
        return <About />
      case 'work':
        return <Work />
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
    </div>
  );
}

export default App;