import { parseDate } from "@/utils/parseDate";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import CustomDatePicker from "../CustomDatePicker";

jest.mock("@/utils/parseDate");

describe("CustomDatePicker", () => {
  const date = new Date(2023, 5, 15);
  const setDate = jest.fn();

  beforeAll(() => {
    (parseDate as jest.Mock).mockImplementation(
      (dateString: string) => "June 15, 2023"
    );
  });

  it("renders correctly with the given date", () => {
    const { getByText } = render(
      <CustomDatePicker date={date} setDate={setDate} />
    );

    const dateText = getByText("June 15, 2023");

    expect(dateText).toBeTruthy();
  });

  it("opens the modal when the pressable is clicked", () => {
    const { getByTestId } = render(
      <CustomDatePicker date={date} setDate={setDate} />
    );

    const pressable = getByTestId("custom-date-picker-pressable");
    fireEvent.press(pressable);

    const modal = getByTestId("custom-date-picker-modal");
    expect(modal.props.visible).toBe(true);
  });

  it("hides the modal when the 'OK' button is pressed", () => {
    const { getByTestId, queryByTestId } = render(
      <CustomDatePicker date={date} setDate={setDate} />
    );

    const pressable = getByTestId("custom-date-picker-pressable");
    fireEvent.press(pressable);

    const okButton = getByTestId("custom-button");
    fireEvent.press(okButton);

    const modalAfterOK = queryByTestId("custom-date-picker-modal");
    expect(modalAfterOK).toBeNull();
  });

  it("calls setDate with the correct value when the date is changed", () => {
    const { getByTestId } = render(
      <CustomDatePicker date={date} setDate={setDate} />
    );

    const pressable = getByTestId("custom-date-picker-pressable");
    fireEvent.press(pressable);

    const datePicker = getByTestId("custom-date-picker");
    const newDate = new Date(2023, 6, 20);

    fireEvent(
      datePicker,
      "onChange",
      { nativeEvent: { timestamp: newDate.getTime() } },
      newDate
    );

    expect(setDate).toHaveBeenCalledWith(newDate);
  });
});
