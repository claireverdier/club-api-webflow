import * as React from "react";
import * as Types from "./types";

declare function ClubsCard(props: {
  as?: React.ElementType;
  cardCover?: Types.Asset.Image;
  cardTitle?: React.ReactNode;
  cardAddress?: React.ReactNode;
  cardPostalCode?: React.ReactNode;
  cardFirstButtonText?: React.ReactNode;
  cardFirstButtonLink?: Types.Basic.Link;
  cardSecondButtonText?: React.ReactNode;
  cardSecondButtonLink?: Types.Basic.Link;
  textCardLink?: Types.Basic.Link;
}): React.JSX.Element;
