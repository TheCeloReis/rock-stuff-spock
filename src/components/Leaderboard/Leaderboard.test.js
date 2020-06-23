import { render } from "@testing-library/svelte";

import Leaderboard from "./Leaderboard.svelte";

describe("The component <Leaderboard />", () => {
  describe("When given a score", () => {
    it("Should show the given score", () => {
      const { getByText } = render(Leaderboard, { score: 573 });

      expect(getByText("573")).toBeInTheDocument();
    });
  });

  describe("When no value is provided", () => {
    it("Should show 0", () => {
      const { getByText } = render(Leaderboard);

      expect(getByText("0")).toBeInTheDocument();
    });
  });
});
