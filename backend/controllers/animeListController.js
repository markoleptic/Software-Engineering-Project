require("dotenv").config();
const { Op } = require("sequelize");
const { anime } = require("../models");

const returnAnimeList = async (req, res) => {
    const contains = req.params.contains;
    if (contains==="") {
        const animeList = await anime.findAll({ 
            attributes: ['name'],
            raw: true
        });
        console.log(animeList);
        res.json(animeList);
    }
    else {
        const animeList = await anime.findAll({ 
            attributes: ['name'],
            raw: true,
            where: { 
                name: {
                    [Op.substring]: contains
                }
            }
        });
        res.json(animeList);
    }
};

module.exports = {returnAnimeList};