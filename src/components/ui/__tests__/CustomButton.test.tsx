import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
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

  it("renders the button with custom text styles", () => {
    const { getByText } = render(
      <CustomButton
        title={title}
        handlePress={handlePress}
        containerStyles={containerStyles}
        textStyles={textStyles}
      />
    );

    const buttonText = getByText(title);

    expect(buttonText.props.className).toContain(textStyles);
  });

  it("disables the button when isLoading is true", () => {
    const { getByTestId } = render(
      <CustomButton title={title} handlePress={handlePress} isLoading={true} />
    );

    const button = getByTestId("custom-button");

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
