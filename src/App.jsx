import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {

  const [items, setItems] = useState([]);

  const handleAddItems = (item) =>{
    setItems([
      ...items,
      item,
    ])
    
    // items.push(newItem)
  }

  const handleDeleteItem = (id) => {
    // filter out the id that matches the object id
    setItems( item => items.filter(item => item.id !== id))
  }


  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList initialItems={initialItems} 
      items={items}
      
      />
      <Stats />
    </div>
  )
}

export default App
