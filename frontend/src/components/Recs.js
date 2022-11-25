import SelectBox from "./SelectBox";
import axios from "../api/axios";
import { userAnime } from "./SelectBox";
import { useAuthContext } from "../context/AuthProvider";
import { useState } from "react";

const Recs = () => {
  const { auth } = useAuthContext();
  const [recs, setRecs] = useState([]);
  const getRecs = async (e) => {
    // prevents default behavior of reloading the page
    e.preventDefault();
    // use try/catch for async/await
    try {
      const response = await axios.post(
        `/api/recs/${auth.username}`,
        userAnime,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //clear the form if no errors have been caught
      if (response) {
        const data = response.data;
        for (let anime in data) {
          setRecs(data[anime].name)
        }
      }
    } catch (err) {
      if (!err?.response) {
        console.log(err.response);
      }
    }
  };

  return (
    <>
      <div className="rec-container">
        <h3>Choose up to 5 of your favorite anime:</h3>
        <div className="rec-select">
          <div>
            <h4> #1:</h4>
            <SelectBox className="rec-select-item" id={0} />
          </div>

          <div>
            <h4> #2:</h4>
            <SelectBox className="rec-select-item" id={1} />
          </div>

          <div>
            <h4> #3:</h4>
            <SelectBox className="rec-select-item" id={2} />
          </div>

          <div>
            <h4> #4:</h4>
            <SelectBox className="rec-select-item" id={3} />
          </div>

          <div>
            <h4> #5:</h4>
            <SelectBox className="rec-select-item" id={4} />
          </div>
        </div>
        <p>{recs}</p>
        <button onClick={getRecs}>Get Recommendations</button>
      </div>
    </>
  );
};
export default Recs;
