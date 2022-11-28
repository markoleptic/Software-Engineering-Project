const { userwatched, sequelize } = require("../models");
const { users } = require("../models");

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
      console.log(userID, userAnime[anime]);
      if (foundAnime === null && userAnime[anime] != null) {
          userwatched.create({
          userID: userID.userID,
          anime_id: userAnime[anime],
        });
      }
    }
    const result = await sequelize.query("call loginsystem.getRec(1)");
    res.json(result);
  }
  else {
    res.status(401).json("Cannot find user");
  }
};

module.exports = { handleRecs };
