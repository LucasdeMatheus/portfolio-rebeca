import './Wellcome.css';
import Social from "./Social.jsx";

function Wellcome() {
    return (
        <div className='wellcomeContainer'>
  <div className='presentation'>
    <h1>Olá Colega!</h1>
    <h2>Seja bem-vindo(a) ao meu espaço de beleza!</h2>
    <h2 className="desktop-only">
      Eu sou <strong>Rebeca</strong>, especialista em realçar o que você tem de mais bonito.
    </h2>
  </div>
  <div className='social'>
    <img src="profile.png" alt="" />
    <p className="mobile-only">
      Eu sou <strong>Rebeca</strong>, especialista em realçar o que você tem de mais bonito.
    </p>
    <Social />
  </div>
</div>

    )
}
export default Wellcome
