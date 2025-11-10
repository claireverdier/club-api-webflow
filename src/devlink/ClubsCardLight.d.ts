import * as React from "react";
import * as Types from "./types";

declare function ClubsCardLight(props: {
  as?: React.ElementType;
  cardTitle?: React.ReactNode;
  address?: React.ReactNode;
  cardCover?: Types.Asset.Image;
  postalCode?: React.ReactNode;
  city?: React.ReactNode;
  cardLink?: Types.Basic.Link;
}): React.JSX.Element;
