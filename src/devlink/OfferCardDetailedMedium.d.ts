import * as React from "react";
import * as Types from "./types";

declare function OfferCardDetailedMedium(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  chipsDisplay?: Types.Visibility.VisibilityConditions;
  chipsText?: React.ReactNode;
  bigTitle?: React.ReactNode;
  monthlyPricingText?: React.ReactNode;
  yearlyPricingText?: React.ReactNode;
  slotContent?: Types.Slots.SlotContent;
  starterpackTitle?: React.ReactNode;
  starterpackSubtitle?: React.ReactNode;
  btnDisplay?: Types.Visibility.VisibilityConditions;
  btnLink?: Types.Basic.Link;
  btnText?: React.ReactNode;
}): React.JSX.Element;
