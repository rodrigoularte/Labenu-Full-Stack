import React from 'react';
import './App.css';
import foto from './img/supply.png'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQEdAutBwcXFfA/profile-displayphoto-shrink_800_800/0/1516948566922?e=2147483647&v=beta&t=UtWJXLhaHgjRBjODLvp1-FllEUcc298_6pEAMtDxV-s"
          nome="Rodrigo"
          descricao="Olá! Meu nome é Rodrigo. Estou iniciando Front-End e meu objetivo é ser um desenvolvedor Full Stack."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png"
          texto="Ver mais"
        />

        <CardPequeno
          icone="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1647977839~hmac=2ca0af9715d6bcb4cf94fe0e3d83b52e"
          nome="Email:"
          descricao="rodrigo@labenu.com"
        />
        <CardPequeno
          icone="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
          nome="Endereço:"
          descricao="Estrada Labenu, 32, Rio de Labenu"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={foto}
          nome="IC Supply Engenharia LTDA"
          descricao="Trabalhei pela empresa IC Supply fazendo manutenção nas fábricas da Casa da Moeda do Brasil. Fui auxiliar de eletricista, ajudando na montagem, instalação e manutenção elétrica."
        />

        <CardGrande
          imagem="https://seeklogo.com/images/C/cmb-casa-da-moeda-do-brasil-logo-C6267470CE-seeklogo.com.png"
          nome="Casa da Moeda do Brasil - CMB"
          descricao="Período em que fiz o curso de Eletricista de Manutenção Industrial no SENAI, com carga horária de 800 horas."
        />
      </div>

        <div className="page-section-container">
          <h2>Formação acadêmica</h2>
          <CardGrande
            imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png"
            nome="Labenu"
            descricao="Web Full Stack"
          />
        </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
