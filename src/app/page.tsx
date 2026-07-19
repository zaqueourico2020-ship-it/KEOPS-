import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

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

      <SearchBar />

      <div style={{ padding: "20px" }}>
        <h2>Bem-vindo ao KEOPS</h2>

        <p>O marketplace inteligente do futuro.</p>
      </div>
    </main>
  );
}
