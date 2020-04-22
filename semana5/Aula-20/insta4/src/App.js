import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    pessoas: [
      {  
        nomeUsuario: 'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'joao',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'amanda',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ]
  }

  // render() {

  //   const listaDeComponentes = this.state.listaDePost.map(Post) => {
  //     return (
  //       <div className={'app-container'}>
  //         {Post.nomeUsuario} - {Post.fotoUsuario} - {Post.fotoPost}
  //       </div>
  //   );
  // }
}
export default App;
