import * as React from "react";
import * as Types from "./types";

declare function ImageToContent(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  headline?: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
  chipsList?: Types.Slots.SlotContent;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  chipsListVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
