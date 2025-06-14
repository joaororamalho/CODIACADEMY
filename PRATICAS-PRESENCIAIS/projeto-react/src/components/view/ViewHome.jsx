import CardHome from "../cards/CardHome";

function ViewHome() {
  return (
    <div className="view-home d-flex justify-content-center">
      <CardHome
        titulo={"Teste 1"}
        texto={"def"}
        link={"https://www.google.com"}
        botao={"botao 1"}
      />
      <CardHome titulo={"Teste 2"} texto={"def"} link={"#"} botao={"botao 2"} />
      <CardHome titulo={"Teste 3"} texto={"def"} link={"#"} botao={"botao 3"} />
    </div>
  );
}

export default ViewHome;
