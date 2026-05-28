import Tarjetapersonal from '../tarjetas/tarjetapersonal';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-company">
        <h2>Mykonos Bazar tienda online</h2>
        <p>
          Empresa dedicada a la venta de productos de bazar.
          Envíos a todo el país y atención personalizada.
        </p>
      </div>

      <div className="footer-team">
        <Tarjetapersonal
          nombre="Joaquin López"
          rol="Jefe de Compras"
          imagen="https://i.pravatar.cc/150?img=1"
        />

        <Tarjetapersonal
          nombre="Carla Pérez"
          rol="Logistica"
          imagen="https://i.pravatar.cc/150?img=2"
        />

        <Tarjetapersonal
          nombre="Esteban Velazquez"
          rol="Creador de la marca"
          imagen="https://i.pravatar.cc/150?img=3"
        />
      </div>
    </footer>
  );
};

export default Footer;