import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import CatList from "./components/CatList.jsx";
import CatDetails from "./components/CatDetails.jsx";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  // Текст ошибки, если что-то пошло не так
  const [error, setError] = useState("");
  // Выбранный кот (объект) или null, если на странице список
  const [selectedCat, setSelectedCat] = useState(null);

  // useEffect срабатывает один раз при первом рендере
  // Пустой массив [] значит "выполнить только при монтировании"
  useEffect(() => {
    // При старте загрузим котиков
    loadCats();
  }, []);

  function loadCats() {
    setLoading(true);
    setError("");

    fetch("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then((data) => setCats(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return (
    <div className="page">
      <Header onReload={loadCats} />

      {!selectedCat && (
        <CatList
          cats={cats}
          loading={loading}
          error={error}
          onSelectCat={setSelectedCat}
        />
      )}

      {selectedCat && (
        <CatDetails
          cat={selectedCat}
          onBack={() => setSelectedCat(null)}
        />
      )}
    </div>
  );
}

  export default App;
