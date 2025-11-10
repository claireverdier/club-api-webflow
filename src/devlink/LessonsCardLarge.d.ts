import * as React from "react";
import * as Types from "./types";

declare function LessonsCardLarge(props: {
  as?: React.ElementType;
  lessonCardCover?: Types.Asset.Image;
  lessonCardTitle?: React.ReactNode;
  lessonCardDescription?: React.ReactNode;
  lessonCardButtonText?: React.ReactNode;
  lessonCardLink?: Types.Basic.Link;
}): React.JSX.Element;
