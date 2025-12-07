function CatCard({ cat, onSelect }) {
  const breed = cat.breeds?.[0];

  return (
    <div className="card" onClick={() => onSelect(cat)}>
      <img src={cat.url} alt="cat" className="card-img" />

      <div className="card-info">
        <p className="card-title">{breed?.name || "Кот без породы"}</p>
        <p className="card-sub">{breed?.origin}</p>
      </div>
    </div>
  );
}

export default CatCard;
