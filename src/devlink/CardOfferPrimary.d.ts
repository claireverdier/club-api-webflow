import * as React from "react";
import * as Types from "./types";

declare function CardOfferPrimary(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  price?: React.ReactNode;
  subtitle?: React.ReactNode;
  slotContent?: Types.Slots.SlotContent;
  btnText?: React.ReactNode;
  btnLink?: Types.Basic.Link;
  btnDisplay?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
