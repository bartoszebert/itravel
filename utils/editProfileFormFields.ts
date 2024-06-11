import { IUserForm } from "@/interfaces/IUserForm";

type Field<T> = {
  title: keyof T;
  placeholder: string;
  isDisabled: boolean;
};

export const editProfileFormFields: Field<IUserForm>[] = [
  {
    title: "username",
    placeholder: "Username",
    isDisabled: true,
  },
  {
    title: "email",
    placeholder: "Email",
    isDisabled: true,
  },
  {
    title: "firstname",
    placeholder: "Firstname",
    isDisabled: false,
  },
  {
    title: "lastname",
    placeholder: "Lastname",
    isDisabled: false,
  },
];
