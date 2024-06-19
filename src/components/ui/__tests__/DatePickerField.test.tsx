import { render } from "@testing-library/react-native";
import React from "react";
import CustomDatePicker from "../CustomDatePicker";
import DatePickerField from "../DatePickerField";

jest.mock("../CustomDatePicker", () => {
  return jest.fn(() => null);
});

describe("DatePickerField", () => {
  const label = "Select Date";
  const date = new Date(2023, 5, 15);
  const onSetDate = jest.fn();

  it("renders correctly with the given props", () => {
    const { getByText } = render(
      <DatePickerField label={label} date={date} onSetDate={onSetDate} />
    );

    const labelText = getByText(label);
    expect(labelText).toBeTruthy();
  });

  it("passes the correct date and onSetDate handler to CustomDatePicker", () => {
    render(<DatePickerField label={label} date={date} onSetDate={onSetDate} />);

    expect(CustomDatePicker).toHaveBeenCalledWith(
      expect.objectContaining({
        date: date,
        setDate: onSetDate,
      }),
      {}
    );
  });
});
