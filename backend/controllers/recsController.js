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
  for (let anime in userAnime) {
    const foundAnime = await userwatched.findOne({
      where: {
        userID: userID.userID,
        anime_id: userAnime[anime],
      },
    });
    if (foundAnime === null) {
        userwatched.create({
        userID: userID.userID,
        anime_id: userAnime[anime],
      });
    }
  }
  const result = await sequelize.query("call loginsystem.getRec(1)");
  res.json(result);
  console.log(result);
};

module.exports = { handleRecs };
