import { styled } from "@styled-system/jsx";
import { JsxStyleProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

//something is weird with this button it does not follow the mouse right
export const Btn = (
  props: PropsWithChildren & JsxStyleProps & { onClick?: () => void },
) => {
  return (
    <styled.button
      cursor={"pointer"}
      _hover={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
      }}
      boxShadow={
        "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
      }
      bgColor={"whitesmoke"}
      {...props}
    />
  );
};
