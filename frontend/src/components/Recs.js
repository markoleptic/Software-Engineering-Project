import SelectBox from "./SelectBox";
import axios from "../api/axios";
import { userAnime } from "./SelectBox";
import { useAuthContext } from "../context/AuthProvider";
import { useState , useEffect } from "react";

const Recs = () => {
  const { auth } = useAuthContext();
  const [recs, setRecs] = useState([]);
  const [showRecs, setShowRecs] = useState(false);

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
        setRecs(data);
      }
    } catch (err) {
      if (!err?.response) {
        console.log(err.response);
      }
    }
  };

 useEffect(() => {
    setShowRecs(true);
 }, [recs]);

 useEffect(() => {
  setShowRecs(false);
}, []);

const getMoreRecs = async (e) => {
  e.preventDefault();
  setShowRecs(false);
}

  return (
    <>
      <div className={!showRecs ? "rec-container" : "offscreen"}>
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
        <button onClick={getRecs}>Get Recommendations</button>
      </div>
      <div className={showRecs ? "rec-results" : "offscreen"}>
        <h2 className="rec-title-text">{auth.username}'s Recommendations</h2>
        <table className="table">
          <thead className="table-title-text">
            <tr height="px 50%">
              <th scope="col">Name</th>
              <th scope="col">Genres</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {recs.map((rec) => (
              <tr key = {rec.name}>
                <td className="name-text">{rec.name}</td>
                <td className="genre-text">{rec.genre}</td>
                <td className="rating-text">{rec.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={getMoreRecs}>Add More</button>
      </div>
    </>
  );
};
export default Recs;
