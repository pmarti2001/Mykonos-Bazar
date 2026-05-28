const Item = ({ nombre, precio, imagen }) => {
  return (
    <div className="item-card">
      <img src={imagen} alt={nombre} />

      <h3>{nombre}</h3>

      <p>${precio}</p>

      <button>Comprar</button>
    </div>
  );
};

export default Item;