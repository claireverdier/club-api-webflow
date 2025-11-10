import * as React from "react";
import * as Types from "./types";

declare function CardAtouts(props: {
  as?: React.ElementType;
  imageImage?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
