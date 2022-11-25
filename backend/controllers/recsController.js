const { userselected } = require("../models");
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
    const foundAnime = await userselected.findOne({
      where: {
        userID: userID.userID,
        anime_id: userAnime[anime],
      },
    });
    if (foundAnime === null) {
      userselected.create({
        userID: userID.userID,
        anime_id: userAnime[anime],
      });
    }
  }
};

module.exports = { handleRecs };
