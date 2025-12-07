function CatDetails({ cat, onBack }) {
  const breed = cat.breeds?.[0];

  return (
    <div>
      <button className="btn btn-back" onClick={onBack}>
        ← Назад
      </button>

      <div className="details">
        <img src={cat.url} alt="cat" className="details-img" />

        <div className="details-info">
          <h2>{breed?.name || "Котик"}</h2>

          <p>
            <b>Страна:</b> {breed?.origin || "Неизвестно"}
          </p>

          <p>
            <b>Жизнь:</b> {breed?.life_span || "?"} лет
          </p>

          <p>
            <b>Характер:</b> {breed?.temperament || "Нет данных"}
          </p>

          <p>
            <b>Описание:</b> {breed?.description || "Нет описания"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CatDetails;
