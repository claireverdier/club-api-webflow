import * as React from "react";
import * as Types from "./types";

declare function FullWidthGreenXl(props: {
  as?: React.ElementType;
  cardHeadline?: React.ReactNode;
  cardTitle?: React.ReactNode;
  cardDescription?: React.ReactNode;
  firstButtonVisibility?: Types.Visibility.VisibilityConditions;
  firstButtonText?: React.ReactNode;
  firstButtonLink?: Types.Basic.Link;
  lienDuPremierBoutonUrlEncodeeEnBase64SiLienExterne?: Types.Builtin.Text;
  secondButtonVisibility?: Types.Visibility.VisibilityConditions;
  secondButtonText?: React.ReactNode;
  secondButtonLink?: Types.Basic.Link;
  lienDuDeuxemeBoutonUrlEncodeeEnBase64SiLienExterne?: Types.Builtin.Text;
  thirdButtonVisibility?: Types.Visibility.VisibilityConditions;
  thirdButtonText?: React.ReactNode;
  thirdButtonLink?: Types.Basic.Link;
  lienDuTroisiemeBoutonUrlEncodeeEnBase64SiLienExterne?: Types.Builtin.Text;
}): React.JSX.Element;
