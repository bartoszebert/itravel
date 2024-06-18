import DatePickerField from "@/components/ui/DatePickerField";
import FormField from "@/components/ui/FormField";
import { IAddTripForm } from "@/interfaces/IAddTripForm";
import { Dispatch, SetStateAction } from "react";

interface Props {
  form: IAddTripForm;
  setForm: Dispatch<SetStateAction<IAddTripForm>>;
  handleSetStartDate: (date: Date | undefined) => void;
  handleSetEndDate: (date: Date | undefined) => void;
}

const TripDetailsForm = ({
  form,
  setForm,
  handleSetStartDate,
  handleSetEndDate,
}: Props) => {
  return (
    <>
      <FormField
        title="name"
        placeholder="Enter trip name"
        otherStyles="mt-2"
        value={form.name}
        handleChangeText={(e: string) =>
          setForm((prev) => ({ ...prev, name: e }))
        }
      />
      <DatePickerField
        label="Start Date"
        date={form.startDate}
        onSetDate={handleSetStartDate}
      />
      <DatePickerField
        label="End Date"
        date={form.endDate}
        onSetDate={handleSetEndDate}
      />
    </>
  );
};

export default TripDetailsForm;
