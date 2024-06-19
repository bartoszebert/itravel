import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import AuthFormField from "../AuthFormField";

jest.mock("@/constants", () => ({
  icons: {
    password: "mock-password-icon",
    profile: "mock-profile-icon",
    eye: "mock-eye-icon",
    eyeHide: "mock-eye-hide-icon",
  },
}));

describe("AuthFormField", () => {
  const title = "Password";
  const value = "password";
  const placeholder = "Enter your password";
  const handleChangeText = jest.fn();
  const keyboardType = "default";

  it("renders correctly with the given props", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <AuthFormField
        title={title}
        value={value}
        placeholder={placeholder}
        handleChangeText={handleChangeText}
        keyboardType={keyboardType}
      />
    );

    const textInput = getByPlaceholderText(placeholder);
    expect(textInput.props.value).toBe(value);
    expect(textInput.props.keyboardType).toBe(keyboardType);
    expect(textInput.props.secureTextEntry).toBe(true);

    const passwordIcon = getByTestId("password-icon");
    expect(passwordIcon).toBeTruthy();
  });

  it("calls handleChangeText when the text input changes", () => {
    const { getByPlaceholderText } = render(
      <AuthFormField
        title={title}
        value={value}
        placeholder={placeholder}
        handleChangeText={handleChangeText}
        keyboardType={keyboardType}
      />
    );

    const textInput = getByPlaceholderText(placeholder);
    fireEvent.changeText(textInput, "new-password");

    expect(handleChangeText).toHaveBeenCalledWith("new-password");
  });

  it("toggles password visibility when the eye icon is pressed", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <AuthFormField
        title={title}
        value={value}
        placeholder={placeholder}
        handleChangeText={handleChangeText}
        keyboardType={keyboardType}
      />
    );

    const textInput = getByPlaceholderText(placeholder);
    const eyeIcon = getByTestId("eye-icon");

    expect(textInput.props.secureTextEntry).toBe(true);

    fireEvent.press(eyeIcon);
    expect(textInput.props.secureTextEntry).toBe(false);

    fireEvent.press(eyeIcon);
    expect(textInput.props.secureTextEntry).toBe(true);
  });
});
