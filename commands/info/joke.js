const { Message, Client } = require("discord.js");
const axios = require("axios");

const getJoke = () =>
  new Promise(async (ful, rej) => {
    const url = new URL("https://some-random-api.ml/joke");

    try {
      const { data } = await axios.get(url.href);
      ful(data);
    } catch (error) {
      rej(error);
    }
  });

module.exports = {
  name: "joke",
  aliases: ["jk"],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const { joke } = await getJoke();
    message.channel.send(String(joke));
  },
};
