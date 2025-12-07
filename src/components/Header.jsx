function Header({ onReload }) {
  return (
    <header className="header">
      <h1>🐱 Cat Gallery</h1>
      <button className="btn" onClick={onReload}>
        Обновить
      </button>
    </header>
  );
}

export default Header;
