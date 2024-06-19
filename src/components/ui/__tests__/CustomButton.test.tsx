import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { StyleSheet } from "react-native";
import CustomButton from "../CustomButton";

describe("CustomButton", () => {
  const title = "Click Me";
  const handlePress = jest.fn();
  const containerStyles = "bg-secondary";
  const textStyles = "text-white";

  it("renders the button with default props", () => {
    const { getByText } = render(
      <CustomButton title={title} handlePress={handlePress} />
    );

    const buttonText = getByText(title);

    expect(buttonText).toBeTruthy();
    expect(buttonText.props.children).toBe(title);
  });

  it("renders the button with custom container and text styles", () => {
    const { getByText, getByTestId } = render(
      <CustomButton
        title={title}
        handlePress={handlePress}
        containerStyles={containerStyles}
        textStyles={textStyles}
      />
    );

    const buttonText = getByText(title);
    const button = getByTestId("custom-button");

    if (!button) throw new Error("Button not found");

    const flattenedContainerStyles = StyleSheet.flatten(button.props.style);
    const flattenedTextStyles = StyleSheet.flatten(buttonText.props.style);

    expect(flattenedContainerStyles.backgroundColor).toBeTruthy();
    expect(flattenedTextStyles.color).toBe("#fff");
  });

  it("disables the button and reduces opacity when isLoading is true", () => {
    const { getByTestId } = render(
      <CustomButton title={title} handlePress={handlePress} isLoading={true} />
    );

    const button = getByTestId("custom-button");
    const flattenedButtonStyles = StyleSheet.flatten(button.props.style);

    expect(flattenedButtonStyles.opacity).toBe(0.5);
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it("calls handlePress when the button is pressed", () => {
    const { getByTestId } = render(
      <CustomButton title={title} handlePress={handlePress} />
    );

    const button = getByTestId("custom-button");

    fireEvent.press(button);

    expect(handlePress).toHaveBeenCalled();
  });
});
