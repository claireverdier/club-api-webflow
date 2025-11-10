import * as React from "react";
import * as Types from "./types";

declare function CoachCard(props: {
  as?: React.ElementType;
  coachName?: React.ReactNode;
  coachFunction?: React.ReactNode;
  coachPicture?: Types.Asset.Image;
}): React.JSX.Element;
