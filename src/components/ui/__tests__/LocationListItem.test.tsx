import { ILocation } from "@/interfaces/ILocation";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import LocationListItem from "../LocationListItem";

describe("LocationListItem", () => {
  const item: ILocation = {
    place_id: "123",
    address_line1: "123 Main St",
    address_line2: "Apt 4B",
    city: "New York",
    state: "NY",
    zip_code: "10001",
    country: "USA",
    formatted: "123 Main St, Apt 4B, New York, NY 10001, USA",
  };
  const onSelect = jest.fn();

  it("renders correctly with the given props", () => {
    const { getByText } = render(
      <LocationListItem item={item} onSelect={onSelect} />
    );

    const addressLine1 = getByText(item.address_line1);
    const addressLine2 = getByText(item.address_line2);

    expect(addressLine1).toBeTruthy();
    expect(addressLine2).toBeTruthy();
  });

  it("calls onSelect when the item is pressed", () => {
    const { getByText } = render(
      <LocationListItem item={item} onSelect={onSelect} />
    );

    const addressLine1 = getByText(item.address_line1);
    fireEvent.press(addressLine1);

    expect(onSelect).toHaveBeenCalled();
  });
});
