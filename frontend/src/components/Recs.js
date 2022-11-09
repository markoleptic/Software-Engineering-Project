import SelectBox from "./SelectBox";

const Recs = () => {
  return (
    <>
      <div className="rec-container">
        <h3>Choose up to 5 of your favorite anime:</h3>
        <div className="rec-select">
          <div>
            <h4> #1:</h4>
            <SelectBox className="rec-select-item" />
          </div>

          <div>
            <h4> #2:</h4>
            <SelectBox className="rec-select-item" />
          </div>

          <div>
            <h4> #3:</h4>
            <SelectBox className="rec-select-item" />
          </div>

          <div>
            <h4> #4:</h4>
            <SelectBox className="rec-select-item" />
          </div>

          <div>
            <h4> #5:</h4>
            <SelectBox className="rec-select-item" />
          </div>
        </div>
        <button>Get Recommendations</button>
      </div>
    </>
  );
};
export default Recs;
