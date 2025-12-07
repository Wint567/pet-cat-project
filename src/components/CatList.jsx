import CatCard from "./CatCard.jsx";

function CatList({ cats, loading, error, onSelectCat }) {
  return (
    <div>
      {loading && <p className="loading">Загрузка...</p>}

      {error && <p className="error">{error}</p>}

      <div className="grid">
        {cats.map((cat) => (
          <CatCard
            key={cat.id}       
            cat={cat}          
            onSelect={onSelectCat} 
          />
        ))}
      </div>
    </div>
  );
}

export default CatList;
