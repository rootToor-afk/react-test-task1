import * as renderer from "react-test-renderer";
import React from "react";
import Counter from "./Counter";

test('Time counter', () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});

