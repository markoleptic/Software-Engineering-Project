const { userwatched, sequelize, users } = require("../models");

const handleRecs = async (req, res) => {
  const username = req.params.username;
  const userAnime = req.body;
  const userID = await users.findOne({
    attributes: ["userID"],
    raw: true,
    where: {
      username: username,
    },
  });
  if (userID !== null) {
    for (let anime in userAnime) {
      const foundAnime = await userwatched.findAll({
        where: {
          userID: userID.userID,
          anime_id: userAnime[anime],
        },
      });
      /* if not already in userwatched and select box isn't empty */
      if (foundAnime.length === 0 && userAnime[anime] != null) {
        console.log("userID: " + userID.userID + " animeID: " + userAnime[anime]);
        userwatched.create({
          userID: userID.userID,
          anime_id: userAnime[anime],
        });
      }
    }
    const result = await sequelize.query(
      `call loginsystem.getRec(${userID.userID})`
    );
    res.json(result);
  } else {
    res.status(401).json("Cannot find user");
  }
};

module.exports = { handleRecs };
