import './Home.css'

export default function Home() {
  return (
    <main id="home">
      <div className="bloco-1">
        <div className="logo">
          <img src="./LOGO.png" alt="Instagram Estratégico" />
        </div>
        <div className="text-main">
          <p>
            Está na hora de ser visto na 
            <b> maior vitrine do mundo</b>, nos vamos te mostrar os pontos chave
            para você estruturar suas redes sociais e produzir conteúdos de alto
            nível.
          </p>
        </div>
        <div>
          <button className="btn">GARANTIR MINHA VAGA</button>
        </div>
      </div>
      <div className="img-main">
        <img src="./FOTOS.png" alt="Aline e Nathali" />
      </div>
    </main>
  )
}
