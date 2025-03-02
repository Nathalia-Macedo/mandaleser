"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useProductContext } from "../Context/ProductContext"
function ProductDetails() {
  const { id } = useParams()
  const { getProductById, favorites, toggleFavorite } = useProductContext()
  const product = getProductById(Number(id))
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-800">
        Produto não encontrado
      </div>
    )
  }

  const isFavorite = favorites.includes(product.id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(251, 191, 36, 0.1)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
        >
          <path
            fill="rgba(217, 119, 6, 0.1)"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <Link
          to="/"
          className="inline-flex items-center text-amber-800 hover:text-amber-600 transition-colors mb-8 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-lg font-medium">Voltar para a galeria</span>
        </Link>

        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden">
          <div className="md:flex">
            {/* Coluna da Imagem */}
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-yellow-200 opacity-30"></div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-600"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Coluna de Informações */}
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col bg-white bg-opacity-70">
              <div className="mb-auto space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-4xl font-bold text-amber-900 mb-2 font-serif">{product.title}</h1>
                  <p className="text-xl text-amber-700 italic">{product.shortDescription}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-amber-800 font-serif">Detalhes do Produto</h2>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-amber-200">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-amber-600 font-serif">{product.price}</p>
                    <p className="text-sm text-amber-700">{product.installments}</p>
                  </div>
                  <span className="px-3 py-1 text-xs text-amber-700 bg-amber-100 rounded-full font-semibold animate-pulse">
                    Frete grátis
                  </span>
                </div>

                <button style={{color:'black'}} className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

