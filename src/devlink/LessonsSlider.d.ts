import * as React from "react";
import * as Types from "./types";

declare function LessonsSlider(props: {
  as?: React.ElementType;
  sliderId?: Types.Basic.IdTextInput;
  title?: React.ReactNode;
  headline?: React.ReactNode;
  navButtonsVisibility?: Types.Visibility.VisibilityConditions;
  paginationVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
