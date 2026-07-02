export default function About() {
  return (
    <>
      <section id="nosotros" style={styles.section}>
        <h2 style={styles.title}>¿Por qué elegirnos?</h2>

        <div style={styles.box}>
          <p>✔ Impresión de alta resolución</p>
          <p>✔ Diseños 100% personalizados</p>
          <p>✔ Entregas puntuales</p>
          <p>✔ Atención a cada detalle</p>
        </div>
      </section>

      <section id="contacto" style={styles.contact}>
        <h2 style={styles.title}>Contacto</h2>
        <p>📍 Entregas a acordar (Servicio seguro)</p>
        <p>📞 Atención directa por Redes Sociales</p>
        <p>💬 Cotiza tu idea con nosotros</p>
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#111",
    color: "white"
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#FFCC00"
  },
  box: {
    marginTop: "20px",
    lineHeight: "2",
    opacity: 0.9,
    fontSize: "18px"
  },
  contact: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0a0a0a",
    color: "white",
    borderTop: "1px solid #333"
  }
};