import "./CardHome.css";

function CardHome({ titulo, texto, link, botao }) {
  return (
    <>
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{texto}</p>
          <a href={link} className="btn btn-primary">
            {botao}
          </a>
        </div>
      </div>
    </>
  );
}

export default CardHome;
