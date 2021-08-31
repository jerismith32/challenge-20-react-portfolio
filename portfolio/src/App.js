import React, { useState } from 'react';
import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Nav from './components/Nav/nav';

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
    
  } 

  return (
    <div>
      <Nav
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        {currentCategory === 'about' ? (
          <>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;