import SwipeableDeleteButton from "@/components/ui/SwipeableDeleteButton";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import "react-native-gesture-handler/jestSetup";
import SwipeableItem from "../SwipeableItem";

jest.mock("@/components/ui/SwipeableDeleteButton", () => {
  return jest.fn(() => null);
});

describe("SwipeableItem", () => {
  const handleDelete = jest.fn();
  const id = "1";
  const children = <Text>Item Content</Text>;

  it("renders correctly with the given children", () => {
    const { getByText } = render(
      <SwipeableItem handleDelete={handleDelete} id={id}>
        {children}
      </SwipeableItem>
    );

    const content = getByText("Item Content");
    expect(content).toBeTruthy();
  });

  it("renders the SwipeableDeleteButton when swiped", () => {
    const { getByTestId } = render(
      <SwipeableItem handleDelete={handleDelete} id={id}>
        {children}
      </SwipeableItem>
    );

    fireEvent(getByTestId("swipeable-item"), "onSwipeableRightOpen");

    expect(SwipeableDeleteButton).toHaveBeenCalledWith(
      expect.objectContaining({
        handleDelete: handleDelete,
      }),
      {}
    );
  });
});
