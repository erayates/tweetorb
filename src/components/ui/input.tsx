import { FC, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

type IFormInputProps = {
  name: string;
  label: string;
  icon?: ReactNode;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "date";
};

const FormInput: FC<IFormInputProps> = ({
  name,
  label,
  icon,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            {label}
          </label>
          <input
            {...field}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...otherProps}
          />

          <span className="absolute right-4 top-4 text-xl text-slate-400">
            {icon}
          </span>
          {errors[name] && <p>{errors[name]?.message as unknown as string}</p>}
        </div>
      )}
    />
  );
};

export default FormInput;
