export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Stampa Pinaple party - Todos los derechos reservados</p>
      <p>📞 WhatsApp: 33 0000 0000</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "30px",
    textAlign: "center",
    background: "#111",
    color: "white"
  }
};