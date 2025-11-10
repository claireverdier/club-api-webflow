import * as React from "react";
import * as Types from "./types";

declare function LessonsCardDetailed(props: {
  as?: React.ElementType;
  cardLink?: Types.Basic.Link;
  cardCover?: Types.Asset.Image;
  cardTitle?: React.ReactNode;
  lessonKcal?: React.ReactNode;
  lessonIntensity?: React.ReactNode;
  lessonDuration?: React.ReactNode;
  _1?: Types.Visibility.VisibilityConditions;
  intensity?: Types.Builtin.Text;
}): React.JSX.Element;
