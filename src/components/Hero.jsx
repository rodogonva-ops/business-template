export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" style={styles.hero}>
      {/* ... (tu código anterior se mantiene igual hasta los botones) ... */}
      
      <div style={styles.buttons}>
        <button style={styles.primary} onClick={() => handleScroll("servicios")}>
          Ver Trabajos
        </button>
        <a href="https://wa.me/523300000000" target="_blank" rel="noreferrer" style={styles.secondary}>
          WhatsApp
        </a>
      </div>
    </section>
  );
}
// (Mantén el mismo objeto styles que ya tenías)

const styles = {
  hero: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#111",
    color: "white"
  },
  logoImg: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px"
  },
  title: {
    fontSize: "44px",
    marginBottom: "20px",
    maxWidth: "800px",
    margin: "0 auto 20px auto",
    lineHeight: "1.4",          // Esto separa los renglones
    letterSpacing: "1.5px"      // Esto separa las letras
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "35px",
    fontSize: "20px",
    lineHeight: "1.6",          // Renglones más separados
    letterSpacing: "0.5px"      // Letras con más aire
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"                 // Más espacio entre los botones
  },
  primary: {
    padding: "14px 28px",
    background: "#FFCC00",
    border: "none",
    color: "black",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  secondary: {
    padding: "14px 28px",
    background: "transparent",
    border: "2px solid #FFCC00",
    color: "#FFCC00",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};