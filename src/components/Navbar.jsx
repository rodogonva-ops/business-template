export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>El Puerto</h2>

      <div style={styles.links}>
        <a href="#inicio">Inicio</a>
        <a href="#menu">Menú</a>
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
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  logo: {
    color: "#38bdf8",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};