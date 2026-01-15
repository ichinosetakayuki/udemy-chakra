import { Button, type ButtonProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type PrimaryButtonProps = ButtonProps & {
  children: ReactNode;
};

export const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  return (
          <Button bg="teal.400" color="white" fontWeight="bold" _hover={{ opacity: 0.8 }} {...props}>{children}</Button>
  );
};