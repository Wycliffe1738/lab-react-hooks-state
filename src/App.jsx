
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // State for shopping cart
  const [cartItems, setCartItems] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Toggle between light and dark mode
  const handleDarkModeToggle = () => {
    setDarkMode((previousMode) => !previousMode)
  }

  // Add a product to the cart
  const handleAddToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product])
  }

  // App styling based on selected theme
  const appStyle = {
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: darkMode ? '#242424' : '#ffffff',
    color: darkMode ? '#ffffff' : '#213547',
    transition: 'all 0.3s ease'
  }

  return (
    <div className="App" style={appStyle}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        onToggle={handleDarkModeToggle}
      />

      <div>
        <label htmlFor="category-filter">Filter by Category: </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart items={cartItems} />
    </div>
  )
}

export default App
