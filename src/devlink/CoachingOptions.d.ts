import * as React from "react";
import * as Types from "./types";

declare function CoachingOptions(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  headline?: React.ReactNode;
  description?: React.ReactNode;
  btnLink?: Types.Basic.Link;
  btnDisplay?: Types.Visibility.VisibilityConditions;
  btnText?: React.ReactNode;
  slotContent?: Types.Slots.SlotContent;
}): React.JSX.Element;
