import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './imagens/4por4.jpg'
import email from './imagens/enviar.png'
import endereco from './imagens/casa.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Alex Pulido" 
          descricao="Oi, eu sou o Alex Pulido. Estou estudando Desenvolvimento Web Full Stack na Labenu, estou adorando o curso e me esforçando para absorver tudo que aprendo, para conseguir um trabalho o mais rápido possível."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={email} 
          label="E-mail: "
          conteudo="axpalx@axpalx.com"
        />  
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={endereco} 
          label="Endereço: "
          conteudo="Rua Pirapora, 170"
        />  
      </div>
      

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://tivit.com/wp-content/themes/tivit_theme/library/img/logo.png" 
          nome="Tivit" 
          descricao=" Atuava criando e mantendo processos nas ferramentas Control-M e CA-Workload.
          Criação e gestão de processos de transmissão de arquivos na ferramenta Connect:Direct.
          Atuação em ambiente Unix-AIX e Windows.
          Criação de scripts em Shell Script para execução dos jobs Control-M/CA-Workload.
          Atuação em projeto de migração da ferramenta CA-Workload para Control-M 7.0" 
        />
        
        <CardGrande 
          imagem="http://www.brq.com/img/valores-brq-min.png" 
          nome="BRQ" 
          descricao="Apesar de ser registrado pela consultoria BRQ, atuava na conta da IBM que atende ao Banco Real.
          Analista do sistema de Gerenciamento Multicanal - GCM (Sistema que gera campanhas para os clientes do banco, estes são abordados por diversos canais como Internet, Disk Real, ATM e Plataforma de Negócios. A Tecnologia utilizada para essa aplicação é Peoplesoft CRM 8.9.
          Analista do Sistema de Atendimento ao Cliente - SAC (Sistema onde são registrados todos os contatos do cliente com o Banco Real). A Tecnologia utilizada para essa aplicação é Peoplesoft CRM 9.0.
          Gestor do sistema Service Center versão 4.06.
          Cuidava das rotinas batch em TWS - IBM Tivoli Workload Scheduler de todos os sistemas que cuidava. Criava Jobs/Job strems, manutenção e etc. Período: 02/2007 até 02/2009" 
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
