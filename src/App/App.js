// import Home from "../Pages/Home"
// import { ProductProvider } from "../Context/ProductContext"
// function App() {
//   return (
//     <ProductProvider>
//      <Home/>
//     </ProductProvider>
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ProductProvider } from "../Context/ProductContext"
import Home from "../Pages/Home"
import ProductDetails from "../Components/ProductDetails"

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ProductProvider>
  )
}

export default App

