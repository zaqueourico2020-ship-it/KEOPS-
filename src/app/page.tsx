import Header from "../components/Header";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        color: "white",
      }}
    >
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>Bem-vindo ao KEOPS</h1>

        <p>O marketplace inteligente está começando...</p>
      </div>
    </main>
  );
}
