/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "react-dom";

import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Counter from "./Counter";

let container: Element = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("Time counter", () => {
  act(() => {
    render(<Counter />, container);
  });
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
