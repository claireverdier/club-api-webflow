import * as React from "react";
import * as Types from "./types";

declare function ChecklistItemSmall(props: {
  as?: React.ElementType;
  afficherItem?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
}): React.JSX.Element;
