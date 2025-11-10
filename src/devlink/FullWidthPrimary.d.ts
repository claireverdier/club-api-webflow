import * as React from "react";
import * as Types from "./types";

declare function FullWidthPrimary(props: {
  as?: React.ElementType;
  cardHeadline?: React.ReactNode;
  cardTitle?: React.ReactNode;
  cardDescription?: React.ReactNode;
  firstButtonVisibility?: Types.Visibility.VisibilityConditions;
  firstButtonText?: React.ReactNode;
  firstButtonLink?: Types.Basic.Link;
  lienDuPremierBoutonUrlEncodeeEnBase64PourLesLienExternes?: Types.Builtin.Text;
  secondButtonVisibility?: Types.Visibility.VisibilityConditions;
  secondButtonText?: React.ReactNode;
  secondButtonLink?: Types.Basic.Link;
  lienDuDeuxiemeBoutonUrlEncodeeEnBase64PourLesLiensExternes?: Types.Builtin.Text;
  thirdButtonVisibility?: Types.Visibility.VisibilityConditions;
  thirdButtonText?: React.ReactNode;
  thirdButtonLink?: Types.Basic.Link;
  cardVisibility?: Types.Visibility.VisibilityConditions;
  lienDuTroisiemeBoutonUrlEncodeeEnBase64PourLesLiensExternes?: Types.Builtin.Text;
}): React.JSX.Element;
