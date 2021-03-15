export type GameMode = "classic" | "spock";

export type GameHandClassic = "ROCK" | "PAPER" | "SCISSOR";
export type GameHandSpock = GameHandClassic | "LIZARD" | "SPOCK";

export type Game = {
  mode: GameMode;
  bestOf: 1 | 3 | 5;
  player1: {
    id: string | null;
    turn: PlayerTurn[];
  };
  player2: {
    id: string | null;
    turn: PlayerTurn[];
  };
};

export type PlayerTurn = {
  hand: GameHandClassic | GameHandSpock;
};
