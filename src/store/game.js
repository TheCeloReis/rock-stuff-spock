import { writable } from "svelte/store";

const NORMAL_MODE = [
  { value: "rock" },
  { value: "paper" },
  { value: "scissors" },
];
const SPOCK_MODE = [...NORMAL_MODE, { value: "lizard" }, { value: "spock" }];

const uninitializedGame = {
  mode: undefined,
  player: {
    selected: undefined,
    score: 0,
  },
  opponent: {
    selected: undefined,
    score: 0,
  },
  cards: [],
};

const { subscribe, set, update } = writable(uninitializedGame);

const init = (mode = "normal") => {
  if (mode === "normal") {
    return set({ ...uninitializedGame, cards: NORMAL_MODE, mode: "normal" });
  }
  return set({ ...uninitializedGame, cards: SPOCK_MODE, mode: "spock" });
};

const reset = () => set(uninitializedGame);

export default {
  subscribe,
  init,
  reset,
};
