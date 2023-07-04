import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClisk?: MouseEventHandler<HTMLButtonElement>;
}
