const Tarjetapersonal = ({ nombre, rol, imagen }) => {
  return (
    <div className="tarjetapersonal">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </div>
  );
};

export default Tarjetapersonal;