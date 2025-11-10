import * as React from "react";
import * as Types from "./types";

declare function KeyPoint(props: {
  as?: React.ElementType;
  illustration?: Types.Asset.Image;
  title?: React.ReactNode;
  description?: React.ReactNode;
}): React.JSX.Element;
