import * as React from "react";
import * as Types from "./types";

declare function SpecialOffer(props: {
  as?: React.ElementType;
  slotContent?: Types.Slots.SlotContent;
  headline?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  btnText?: React.ReactNode;
  btnDisplay?: Types.Visibility.VisibilityConditions;
  btnLink?: Types.Basic.Link;
}): React.JSX.Element;
