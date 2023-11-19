import { Route, Routes } from 'react-router-dom'
import { Home, About, Contact } from './pages'
import { Layout } from './components/'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
