import * as React from "react";
import * as Types from "./types";

declare function FullWidthCover(props: {
  as?: React.ElementType;
  cardCover?: Types.Asset.Image;
  cardHeadline?: React.ReactNode;
  cardTitle?: React.ReactNode;
  cardDescriptionVisibility?: Types.Visibility.VisibilityConditions;
  cardDescription?: React.ReactNode;
  firstButtonVisibility?: Types.Visibility.VisibilityConditions;
  firstButtonText?: React.ReactNode;
  firstButtonLink?: Types.Basic.Link;
  secondButtonVisibility?: Types.Visibility.VisibilityConditions;
  secondButtonText?: React.ReactNode;
  secondButtonLink?: Types.Basic.Link;
  thirdButtonVisibility?: Types.Visibility.VisibilityConditions;
  thirdButtonText?: React.ReactNode;
  thirdButtonLink?: Types.Basic.Link;
  _4thButtonVisibility?: Types.Visibility.VisibilityConditions;
  _4thButtonText?: React.ReactNode;
  _4thButtonLink?: Types.Basic.Link;
}): React.JSX.Element;
