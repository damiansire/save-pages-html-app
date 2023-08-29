import { useState } from 'react'

const PageList = (): JSX.Element => {
  // Estado para almacenar la lista de elementos
  const [items, setItems] = useState<string[]>([])

  // Estado para el elemento que se está agregando
  const [newItem, setNewItem] = useState<string>('')

  // Función para manejar la adición de un elemento a la lista
  const addItem = (): void => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem])
      setNewItem('')
    }
  }

  // Función para manejar la eliminación de un elemento de la lista
  const removeItem = (index: number): void => {
    const updatedList = items.filter((_, i) => i !== index)
    setItems(updatedList)
  }

  return (
    <div>
      <h1>Page List</h1>
      <input type="text" value={newItem} onChange={(e): void => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={(): void => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageList
