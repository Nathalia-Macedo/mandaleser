import { Link } from "react-router-dom"

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 text-center mb-8">
            Arte com Alma, Criada para Tocar o Seu Ser
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="Exclusividade & Intuição"
              description="Nenhuma peça é igual à outra. Tudo é feito manualmente, com intenção e amor."
              icon={<PathIcon />}
            />
            <FeatureCard
              title="Conexão & Espiritualidade"
              description="Arte que traduz forças ancestrais e manifesta o poder do Axé."
              icon={<SpiritIcon />}
            />
            <FeatureCard
              title="Detalhes que Encantam"
              description="Cada peça tem um toque especial para tornar sua experiência única."
              icon={<StarIcon />}
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-amber-800 mb-8 max-w-3xl mx-auto">
              Nossas mandalas, quadros e acessórios não são apenas objetos – são portais de energia, símbolos de força e
              beleza. Cada detalhe é pensado para trazer equilíbrio e significado ao seu altar, ao seu espaço e ao seu
              dia a dia.
            </p>
            <Link
              to="/produtos"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-amber-600 hover:to-orange-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Explore nossa coleção
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    <div className="text-amber-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
    <p className="text-amber-700">{description}</p>
  </div>
)

const PathIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const SpiritIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

const StarIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

export default AboutSection

