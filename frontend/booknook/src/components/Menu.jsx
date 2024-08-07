import React from "react";
import '../styles/Menu.css'
import '../styles/GlobalSytles.css'
function Menu() {
    
    return(
      <div className="body">
          <div className="divMain" id="divMain">
          <header className="cabecario">
            <div id="title">
              <h1 id="booknook">:)</h1>
            </div>
            <ul className="conjuntoLista">
              <a href="/" className="buttons">
                <li className="lista">Home</li>
              </a>
              <a href="/" className="buttons">
                <li className="lista">Formas de Pagamento</li>
              </a>
              <a id="button-vendaJa" href="/login" className="link">
                <li className="lista">Venda Já!</li>
              </a>
            </ul>
          </header>
        </div>
      </div>
    );

}
export default Menu;
