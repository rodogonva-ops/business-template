export default function About() {
  return (
    <>
      <section id="nosotros" style={styles.section}>
        <h2 style={styles.title}>¿Por qué elegirnos?</h2>

        <div style={styles.box}>
          <p>✔ Frescura diaria</p>
          <p>✔ Ingredientes premium</p>
          <p>✔ Atención rápida</p>
          <p>✔ Experiencia familiar</p>
        </div>
      </section>

      {/* CONTACTO (nivel ventas) */}
      <section id="contacto" style={styles.contact}>
        <h2 style={styles.title}>Contacto</h2>

        <p>📍 Guadalajara, Jalisco</p>
        <p>📞 33 0000 0000</p>
        <p>💬 WhatsApp disponible 24/7</p>
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0f172a"
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px"
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
    background: "#111827",
    borderTop: "1px solid rgba(255,255,255,0.1)"
  }
};