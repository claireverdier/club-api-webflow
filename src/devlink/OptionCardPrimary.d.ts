import * as React from "react";
import * as Types from "./types";

declare function OptionCardPrimary(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  price?: React.ReactNode;
  slotContent?: Types.Slots.SlotContent;
}): React.JSX.Element;
