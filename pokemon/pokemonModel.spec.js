const Pokemon = require("./pokemonModel");
const db = require("../data/db-config");

describe("The Pokemon Model", () => {
  beforeEach(async () => {
    await db("pokemon").truncate();
  });

  describe("the insert function", () => {
    const pokemonData = { name: "Pikachu" };

    it("should insert a new pokemon", async () => {
      await Pokemon.insert(pokemonData);

      const pokemon = await db("pokemon");

      expect(pokemon.length).toBe(1);
      expect(pokemon[0].name).toBe("Pikachu");
    });

    it("should resolve to the newly created pokemon", async () => {
      const pokemon = await Pokemon.insert(pokemonData);

      expect(pokemon).toEqual({ id: 1, name: "Pikachu" });
    });
  });

  describe("the remove function", () => {
    const pokemonData = { name: "Pikachu" };

    it("should remove the pokemon with a given id", async () => {
      await db("pokemon").insert(pokemonData);

      await Pokemon.remove(1);

      const pokemon = await db("pokemon").where({ id: 1 });

      expect(pokemon.length).toBe(0);
    });

    it("should resolve to the remaining pokemon", async () => {
      await db("pokemon").insert(pokemonData);

      await Pokemon.remove(1).then(res => {
        
      });
    });
  });
});
