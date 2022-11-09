require("dotenv").config();
const { Op } = require("sequelize");
const { anime } = require("../models");

const returnAnimeList = async (req, res) => {
  const contains = req.params.contains;
  const animeList = await anime.findAll({
    attributes: ["name"],
    raw: true,
    where: {
      name: {
        [Op.substring]: contains,
      },
    },
  });
  res.json(animeList);
};

const returnEntireAnimeList = async (req, res) => {
  const animeList = await anime.findAll({
    attributes: ["name"],
    raw: true,
    where: {
      [Op.or]: [
        {
          rating: {
            [Op.gte]: 8,
          },
        },
        {
          members: {
            [Op.gte]: 200000,
          },
        },
      ],
    },
  });
  res.json(animeList);
};

returnEntireAnimeList;

module.exports = { returnAnimeList, returnEntireAnimeList };
