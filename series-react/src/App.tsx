import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { AnimatedHamburger, Item } from './components/AnimatedHamburger';
// import { HomePage } from './pages/HomePage';
// import { ContactPage } from './pages/ContactPage';
// import { CatalogPage } from './pages/CatalogPage';


function App() {
  // ricreo uno stato interno con useState che accetterà un array di items
  // questo farà in modo che quando associo <Item> al mio risultato
  // è tutto tipizzato; lo inizializzo con un array vuoto
  const [items, setItems] = useState<Item[]>([]);

  // metterò axios all'interno di useEffect, a cui passerò un array vuoto,
  // in modo che così la chiamata viene fatta solo quando l'app è stata inizializzata
  useEffect(()=>{
    axios.get<Item[]>('http://localhost:3001/config')
    .then(res => {
      setItems(res.data)
    })
  }, [])

  console.log('RENDER', items)

  const goTo = (url: string) => {
    window.open(url);
  }

  return (
    <div>
      <AnimatedHamburger
      items={items}
      onIconClick={goTo} />
      {/* <HomePage />
      <ContactPage />
      <CatalogPage /> */}
    </div>
    

  );
}

export default App;
