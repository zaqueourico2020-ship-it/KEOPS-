export default function SearchBar() {
  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Pesquise produtos, lojas..."
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />
    </div>
  );
}
