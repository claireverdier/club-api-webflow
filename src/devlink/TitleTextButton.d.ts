import * as React from "react";
import * as Types from "./types";

declare function TitleTextButton(props: {
  as?: React.ElementType;
  headline?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
