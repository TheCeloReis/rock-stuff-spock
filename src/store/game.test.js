import game from "./game";
import { get } from "svelte/store";

describe("The store game", () => {
  beforeEach(() => {
    game.reset();
  });

  it("Should initialized without scores, players and mode", () => {
    expect(get(game).mode).toBeUndefined();

    expect(get(game).player.score).toBe(0);
    expect(get(game).opponent.score).toBe(0);

    expect(get(game).cards.length).toBe(0);
  });

  describe("When initialized in NORMAL mode", () => {
    it("Should set the mode to normal", () => {
      game.init("normal");
      expect(get(game).mode).toBe("normal");
    });
    it("Should have 3 cards", () => {
      game.init("normal");
      expect(get(game).cards.length).toBe(3);
    });
  });

  describe("When initialized in SPOCK mode", () => {
    it("Should set the mode to SPOCK", () => {
      game.init("spock");
      expect(get(game).mode).toBe("spock");
    });
    it("Should have 5 cards", () => {
      game.init("spock");
      expect(get(game).cards.length).toBe(5);
    });
  });

  describe("When reseted", () => {
    it("Should set the initial state again", () => {
      const initial = get(game);

      expect(get(game).mode).toBeUndefined();
      game.init();
      expect(get(game).mode).toBe("normal");

      game.reset();
      expect(get(game)).toBe(initial);
    });
  });

  describe("The toogleRules", () => {
    it("Should toggle between states", () => {
      expect(get(game).showRules).toBeFalsy();
      game.toggleRules();
      expect(get(game).showRules).toBeTruthy();
      game.toggleRules();
      expect(get(game).showRules).toBeFalsy();
    });
  });

  describe("When the game begins", () => {
    describe("The player choose a option", () => {
      it("Should update its state", () => {
        const hand = "rock";
        expect(get(game).player.selected).toBeUndefined();
        game.playerChoose(hand);
        expect(get(game).player.selected).toBe(hand);
      });
    });
  });
});
