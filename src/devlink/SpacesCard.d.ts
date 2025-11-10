import * as React from "react";
import * as Types from "./types";

declare function SpacesCard(props: {
  as?: React.ElementType;
  spaceCardCover?: Types.Asset.Image;
  spaceCardTitle?: React.ReactNode;
  spaceCardDescription?: React.ReactNode;
}): React.JSX.Element;
