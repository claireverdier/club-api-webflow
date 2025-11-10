import * as React from "react";
import * as Types from "./types";

declare function DowloadAppArgument(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  descriptionVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
