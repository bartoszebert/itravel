import { icons } from "@/constants";
import { render } from "@testing-library/react-native";
import React from "react";
import { StyleSheet } from "react-native";
import TabIcon from "../TabIcon";

describe("TabIcon", () => {
  const icon = icons.eye;
  const color = "red";
  const name = "Home";

  it("renders the icon and name correctly", () => {
    const { getByText, getByTestId } = render(
      <TabIcon icon={icon} color={color} name={name} />
    );

    const iconImage = getByTestId("tab-icon-image");
    const nameText = getByText(name);

    const flattenedTextStyles = StyleSheet.flatten(nameText.props.style);

    expect(iconImage.props.source).toEqual(1);
    expect(nameText.children[0]).toEqual(name);

    expect(flattenedTextStyles.color).toBe(color);
    expect(nameText.props.className).toContain("text-xs");
    expect(nameText.props.className).toContain("font-pregular");

    expect(iconImage.props.className).toContain("w-6");
    expect(iconImage.props.className).toContain("h-6");
  });
});
