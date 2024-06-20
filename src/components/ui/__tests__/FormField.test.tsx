import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import FormField from "../FormField";

jest.mock("@/constants", () => ({
  icons: {
    eye: "mock-eye-icon",
    eyeHide: "mock-eye-hide-icon",
    profile: "mock-profile-icon",
  },
}));

describe("FormField", () => {
  const value = "name";
  const placeholder = "Enter your name";
  const handleChangeText = jest.fn();
  const keyboardType = "default";
  const otherStyles = "mt-2 w-full";

  it("renders correctly with the given props", () => {
    const { getByPlaceholderText } = render(
      <FormField
        value={value}
        placeholder={placeholder}
        handleChangeText={handleChangeText}
        keyboardType={keyboardType}
        otherStyles={otherStyles}
      />
    );

    const textInput = getByPlaceholderText(placeholder);
    expect(textInput.props.value).toBe(value);
    expect(textInput.props.keyboardType).toBe(keyboardType);
  });

  it("calls handleChangeText when the text input changes", () => {
    const { getByPlaceholderText } = render(
      <FormField
        value={value}
        placeholder={placeholder}
        handleChangeText={handleChangeText}
        keyboardType={keyboardType}
        otherStyles={otherStyles}
      />
    );

    const textInput = getByPlaceholderText(placeholder);
    fireEvent.changeText(textInput, "new-password");

    expect(handleChangeText).toHaveBeenCalledWith("new-password");
  });

  it("disables the input field when the disabled prop is true", () => {
    const { getByPlaceholderText } = render(
      <FormField
        value={value}
        placeholder={placeholder}
        handleChangeText={handleChangeText}
        keyboardType={keyboardType}
        otherStyles={otherStyles}
        disabled={true}
      />
    );

    const textInput = getByPlaceholderText(placeholder);
    expect(textInput.props.editable).toBe(false);
  });
});
