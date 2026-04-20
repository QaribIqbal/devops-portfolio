import test from "node:test";
import assert from "node:assert/strict";

import { buildHorizontalSnapPoints, getHorizontalTravel } from "./horizontal-scroll.ts";

test("getHorizontalTravel returns the positive overflow width only", () => {
  assert.equal(getHorizontalTravel(1680, 960), 720);
  assert.equal(getHorizontalTravel(960, 960), 0);
  assert.equal(getHorizontalTravel(840, 960), 0);
});

test("buildHorizontalSnapPoints normalizes card offsets into stable progress values", () => {
  assert.deepEqual(buildHorizontalSnapPoints([0, 320, 640, 960], 960), [0, 0.3333, 0.6667, 1]);
});

test("buildHorizontalSnapPoints clamps and de-duplicates invalid positions", () => {
  assert.deepEqual(buildHorizontalSnapPoints([-20, 0, 480, 480, 1200], 960), [0, 0.5, 1]);
});
