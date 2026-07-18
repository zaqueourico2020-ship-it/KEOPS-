export default function Header() {
  return (
    <header
      style={{
        background: "#6D28D9",
        color: "#fff",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>KEOPS</h2>

      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "22px",
        }}
      >
        <span>🔔</span>
        <span>❤️</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </header>
  );
}
