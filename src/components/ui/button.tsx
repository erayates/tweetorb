import clsx from "clsx";
import { forwardRef } from "react";

interface ButtonOptions {
  variant?: ButtonVariant;
  color?: ButtonColor;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

type ButtonVariant = "outline" | "contained";
type ButtonColor = "dark" | "primary" | "success" | "meta";

const variant = {
  outlined: "border bg-transparent",
  contined: "bg-opacity-100",
};

const color = {
  primary: "bg-primary text-white",
  success: "bg-success text-white",
  dark: "bg-black text-white",
  meta: "bg-meta-3 text-white",
};

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "contained":
      return "bg-opacity-100";
    case "outline":
      return "border bg-transparent";
    default:
      return undefined;
  }
};

const getColor = (color: ButtonColor, variant: ButtonVariant) => {
  switch (color) {
    case "primary":
      return variant === "contained"
        ? "bg-primary text-white"
        : "border-primary text-primary";
    case "success":
      return variant === "contained"
        ? "bg-success text-white"
        : "border-success text-success";
    case "dark":
      return variant === "contained"
        ? "bg-black text-white"
        : "border-black text-black";
    case "meta":
      return variant === "contained"
        ? "bg-meta-3 text-white"
        : "border-meta-3 text-meta-3";
    default:
      return undefined;
  }
};

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = "contained",
    type = "button",
    color = "primary",
    className,
    children,
    ...rest
  } = props;

  const merged = clsx(
    "inline-flex items-center justify-center px-10 py-4 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10",
    getVariant(variant),
    getColor(color, variant),
    className,
  );

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
