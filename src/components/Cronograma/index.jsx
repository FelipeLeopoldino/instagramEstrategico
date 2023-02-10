import './Cronograma.css'

export default function Cronograma() {
  return (
    <section id="cronograma">
      <h2>Encontros:</h2>
      <div className="encontros">
        <div className="encontro-1">
          <div className="dia">01</div>
          <div className="mes">Março</div>
        </div>
        <div className="conteudo">
          <ol>
            <li>Introdução ao Marketing</li>
            <li>Branding</li>
            <li>Vanagens de cada rede social</li>
            <li>Mentalidade</li>
          </ol>
        </div>
      </div>
      <div className="encontros">
        <div className="encontro-2">
          <div className="dia">07</div>
          <div className="mes">Março</div>
        </div>
        <div className="conteudo">
          <ol>
            <li>Os 10 passos para estruturar estrategicamente seu perfil</li>
            <li>Branding</li>
            <li>Vanagens de cada rede social</li>
            <li>Mentalidade</li>
          </ol>
        </div>
      </div>
      <div className="encontros">
        <div className="encontro-3">
          <div className="dia">15</div>
          <div className="mes">Março</div>
        </div>
        <div className="conteudo">
          <ol>
            <li>Como organizar o conteúdo</li>
            <li>Utilizando as ferramentas</li>
            <li>Aula prática de Reels e Stories.Como viralizar</li>
          </ol>
        </div>
      </div>

      <h2 className="bonus-h2">Bônus Exclusivo:</h2>
      <section id="bonus">
        <div className="bonus-1">
          <h4>Grupo exclusivo no telegram</h4>
          <p>
            Onde Vamos acompanhar diariamente todo o mês de fevereiro.
            Orientando, tirando dúvidas e conhecendo bem de perto o trabalho de
            cada aluno.
          </p>
        </div>
        <div className="bonus-2">
          <h4>Exercícios e acompanhamentos</h4>
          <p>Exclusivo e individualizado por alune.</p>
        </div>
        <div className="bonus-3">
          <h4>Material com conteúdos</h4>
          <p>Personalizados de acordo com o seu nicho</p>
        </div>
        <div className="bonus-4">
          <h4>Encontro sobre Produtividade</h4>
          <p>Com especialista da área dia 22/03/23</p>
        </div>
      </section>
    </section>
  )
}
