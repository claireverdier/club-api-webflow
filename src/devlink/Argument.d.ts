import * as React from "react";
import * as Types from "./types";

declare function Argument(props: {
  as?: React.ElementType;
  cardTitle?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardDisplay?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
