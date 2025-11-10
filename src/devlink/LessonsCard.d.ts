import * as React from "react";
import * as Types from "./types";

declare function LessonsCard(props: {
  as?: React.ElementType;
  lessonCardCover?: Types.Asset.Image;
  lessonCardTitle?: React.ReactNode;
  lessonCardDescription?: React.ReactNode;
  lessonCardButtonText?: React.ReactNode;
  lessonCardLink?: Types.Basic.Link;
}): React.JSX.Element;
