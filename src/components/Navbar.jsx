export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>
        <span style={{ color: "#FFCC00" }}>STAMPA</span> / Pineapple Party
      </h2>

      <div style={styles.links}>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 30px",
    alignItems: "center",
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: "2px solid #FFCC00"
  },
  logo: {
    color: "white",
    fontWeight: "bold",
    margin: 0
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};