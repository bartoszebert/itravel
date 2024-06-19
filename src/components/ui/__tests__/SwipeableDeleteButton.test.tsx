import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import SwipeableDeleteButton from "../SwipeableDeleteButton";

describe("SwipeableDeleteButton", () => {
  const handleDelete = jest.fn();

  it("renders correctly", () => {
    const { getByText } = render(
      <SwipeableDeleteButton handleDelete={handleDelete} />
    );

    const deleteText = getByText("Delete");
    expect(deleteText).toBeTruthy();
  });

  it("calls handleDelete when the button is pressed", () => {
    const { getByTestId } = render(
      <SwipeableDeleteButton handleDelete={handleDelete} />
    );

    const deleteButton = getByTestId("delete-button");
    fireEvent.press(deleteButton);

    expect(handleDelete).toHaveBeenCalled();
  });
});
