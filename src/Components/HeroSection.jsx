
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Heart, ChevronLeft, ChevronRight } from "lucide-react"

import { useProductContext } from "../Context/ProductContext"
function MandaleSERLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { getCarouselProducts } = useProductContext()
  const carouselProducts = getCarouselProducts()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselProducts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselProducts.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen background images */}
      {carouselProducts.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Mandale-SER</h1>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                Loja
              </a>
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                Sobre
              </a>
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                Contato
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ShoppingBag className="w-6 h-6 text-white" />
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Text Content */}
              <div className="md:w-1/2 text-white space-y-6 mb-12 md:mb-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Viva a Arte de Ser!</h2>
                <p className="text-lg md:text-xl max-w-lg">
                  Entre em um espaço de conexão, espiritualidade e expressão. Cada peça carrega afeto, honra a
                  ancestralidade e leva energia para seu lar e seu ser.
                </p>
                <button
                  className="bg-amber-600 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl
                                   hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-md hover:text-amber-200 border border-transparent hover:border-amber-200"
                >
                  Descubra a arte que conecta
                </button>
              </div>

              {/* Product Info */}
              <div className="md:w-1/3 bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{carouselProducts[currentSlide].title}</h3>
                <p className="mb-4">{carouselProducts[currentSlide].shortDescription}</p>
                <Link
                  to={`/produto/${carouselProducts[currentSlide].id}`}
                  className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all duration-300 inline-block"
                >
                  Ver mais detalhes
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
      >
        <Heart className="w-6 h-6" />
      </a>
    </div>
  )
}

export default MandaleSERLandingPage

