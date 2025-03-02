import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-25%20%C3%A0%28s%29%2015.41.19_eed7f749.jpg-CABlqFPlnsJGw2aSG6wZRV0bsUu2jx.jpeg",
      title: "Mandala Epahey Oyá",
      shortDescription: "Força e Transformação",
      description:
        "Mandala artesanal dedicada à Oyá, orixá dos ventos e das transformações. Peça única pintada à mão em tons de vermelho e marrom, decorada com búzios naturais que representam a força e a ancestralidade. A arte retrata a energia dinâmica e poderosa desta orixá guerreira.",
      details: [
        "Material: Madeira MDF e búzios naturais",
        "Tamanho: 25cm de diâmetro",
        "Pintura artesanal",
        "Acabamento em alto brilho",
        "Peça única e exclusiva",
      ],
      price: "R$ 85,00",
      installments: "ou 3x de R$ 28,33 sem juros",
      category: "Mandala",
      showInCarousel: true,
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-25%20%C3%A0%28s%29%2015.41.18_79d949d6.jpg-1hZOSDdIG93Aa0mUpZBbDs9p1Ho2EG.jpeg",
      title: "Mandala Ogunhê",
      shortDescription: "Proteção e Caminhos",
      description:
        "Mandala artesanal em homenagem a Ogum, orixá dos caminhos e da tecnologia. Com elementos em azul e verde que simbolizam a força e a natureza, esta peça traz búzios naturais que representam a proteção e a abertura de caminhos.",
      details: [
        "Material: Madeira MDF e búzios naturais",
        "Tamanho: 25cm de diâmetro",
        "Pintura artesanal",
        "Acabamento em alto brilho",
        "Peça única e exclusiva",
      ],
      price: "R$ 85,00",
      installments: "ou 3x de R$ 28,33 sem juros",
      category: "Mandala",
      showInCarousel: true,
    },
    {
      id: 3,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-25%20%C3%A0%28s%29%2015.41.21_b868227c.jpg-WqwVqxz15XaLR5eIeaKJxy5aN5GYIa.jpeg",
      title: "Mandala Atotô",
      shortDescription: "Cura e Transformação",
      description:
        "Mandala artesanal dedicada a Obaluaê, orixá da cura e da transformação. Em tons de dourado e marrom, com búzios naturais que simbolizam a sabedoria ancestral e o poder de cura. A arte representa a palha sagrada que veste este orixá.",
      details: [
        "Material: Madeira MDF e búzios naturais",
        "Tamanho: 25cm de diâmetro",
        "Pintura artesanal",
        "Acabamento em alto brilho",
        "Peça única e exclusiva",
      ],
      price: "R$ 85,00",
      installments: "ou 3x de R$ 28,33 sem juros",
      category: "Mandala",
      showInCarousel: true,
    },
    {
      id: 4,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-25%20%C3%A0%28s%29%2015.41.15_e5150e91.jpg-vg5RzX8xkYflThzJGTdawVm3XrYAns.jpeg",
      title: "Quadro Filha do Mar",
      shortDescription: "Arte Sensorial",
      description:
        "Quadro decorativo artesanal que traz a energia do mar para seu ambiente. Com areia natural e conchas verdadeiras, esta peça única combina elementos táteis com a suavidade das ondas pintadas à mão, criando uma experiência sensorial única.",
      details: [
        "Material: MDF, areia natural e conchas",
        "Tamanho: 20x15cm",
        "Técnica mista",
        "Acabamento texturizado",
        "Peça única e exclusiva",
      ],
      price: "R$ 65,00",
      installments: "ou 2x de R$ 32,50 sem juros",
      category: "Quadro Decorativo",
      showInCarousel: false,
    },
    {
      id: 5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-25%20%C3%A0%28s%29%2015.41.15_2d1af133.jpg-7ALgFm9xfMSZx9aWqi6WBT0Kw9SqgH.jpeg",
      title: "Quadro Luciane",
      shortDescription: "Energia e Cores",
      description:
        "Quadro personalizado que celebra a força feminina através das cores. Com um arco-íris vibrante e rosas vermelhas, esta peça única traz elementos que simbolizam a beleza, a diversidade e o poder pessoal.",
      details: [
        "Material: MDF",
        "Tamanho: 20x15cm",
        "Pintura artesanal",
        "Acabamento em alto brilho",
        "Peça personalizada",
      ],
      price: "R$ 60,00",
      installments: "ou 2x de R$ 30,00 sem juros",
      category: "Quadro Decorativo",
      showInCarousel: false,
    },
    {
      id: 6,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-25%20%C3%A0%28s%29%2015.41.16_a8c71be2.jpg-rPegaAcdd0jz5OybMLYHuIK9A8VtRE.jpeg",
      title: "Quadro Oké Arô",
      shortDescription: "Conexão com a Natureza",
      description:
        "Arte em madeira natural que celebra a conexão com a terra. Pintado à mão em tons de verde e amarelo, este quadro traz a energia do orixá Oxóssi, senhor das matas e da fartura.",
      details: [
        "Material: Madeira natural",
        "Tamanho: 20cm de diâmetro",
        "Pintura artesanal",
        "Acabamento natural",
        "Peça única e exclusiva",
      ],
      price: "R$ 70,00",
      installments: "ou 2x de R$ 35,00 sem juros",
      category: "Quadro Decorativo",
      showInCarousel: false,
    },
    {
      id: 7,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-25%20%C3%A0%28s%29%2015.41.22_50f31033.jpg-gSBd47KdyPgSJr5p0LW5SouALJSobs.jpeg",
      title: "Pulseira Lua Mística",
      shortDescription: "Proteção e Luz",
      description:
        "Pulseira artesanal em quartzo branco com pingentes místicos. Combina a energia purificadora do quartzo com símbolos lunares em tons de azul, trazendo proteção e conexão com as energias celestiais.",
      details: [
        "Material: Quartzo branco e pingentes metálicos",
        "Tamanho: Ajustável",
        "Pingentes: Lua, estrela e búzios",
        "Acabamento artesanal",
        "Peça única",
      ],
      price: "R$ 45,00",
      installments: "ou 2x de R$ 22,50 sem juros",
      category: "Acessório",
      showInCarousel: false,
    },
  ])

  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const getProductById = (id) => {
    return products.find((product) => product.id === Number(id))
  }

  const getCarouselProducts = () => {
    return products.filter((product) => product.showInCarousel)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        favorites,
        toggleFavorite,
        getProductById,
        getCarouselProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

