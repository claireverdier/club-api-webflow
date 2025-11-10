import * as React from "react";
import * as Types from "./types";

declare function Banner(props: {
  as?: React.ElementType;
  textDesktop?: Types.Basic.RichTextChildren;
  textMobile?: Types.Basic.RichTextChildren;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
