export default function HeroBanner() {
  return (
    <section
      style={{
        margin: "20px",
        padding: "30px",
        borderRadius: "20px",
        background: "linear-gradient(135deg,#6D28D9,#9333EA)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2>Bem-vindo ao KEOPS</h2>

      <p>As melhores ofertas em um só lugar.</p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          borderRadius: "10px",
          border: "none",
          background: "#fff",
          color: "#6D28D9",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Comprar Agora
      </button>
    </section>
  );
}
