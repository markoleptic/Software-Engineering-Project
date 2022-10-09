import Select from "react-select";

const Recs = () => {
  const options = [
    { value: "Anime Title 1", label: "Anime Title 1" },
    { value: "Anime Title 2", label: "Anime Title 2" },
    { value: "Anime Title 3", label: "Anime Title 3" },
    { value: "Anime Title 4", label: "Anime Title 4" },
    { value: "Anime Title 5", label: "Anime Title 5" },
  ];
  return (
    <>
      <div className="rec-container">
        <h3>Choose up to 5 of your favorite anime:</h3>
        <div className="rec-select">
          <div>
          <h4> #1:</h4>
            <Select options={options} className="rec-select-item" />
          </div>

          <div>
            <h4> #2:</h4>
            <Select options={options} className="rec-select-item" />
          </div>

          <div>
            <h4> #3:</h4>
            <Select options={options} className="rec-select-item" />
          </div>

          <div>
            <h4> #4:</h4>
            <Select options={options} className="rec-select-item" />
          </div>

          <div>
            <h4> #5:</h4>
            <Select options={options} className="rec-select-item" />
          </div>
        </div>
        <button >Get Recommendations</button>
      </div>
    </>
  );
};
export default Recs;
