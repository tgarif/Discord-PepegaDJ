const { CommandInteraction } = require("discord.js");
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
  description: "get a random joke to release stress",
  type: "CHAT_INPUT",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (_, interaction) => {
    const { joke } = await getJoke();
    interaction.followUp({ content: String(joke) });
  },
};
