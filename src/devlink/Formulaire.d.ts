import * as React from "react";
import * as Types from "./types";

declare function Formulaire(props: {
  as?: React.ElementType;
  sousTitre?: React.ReactNode;
  titre?: React.ReactNode;
  avantage1?: Types.Visibility.VisibilityConditions;
  avantage1Text?: React.ReactNode;
  avantage2?: Types.Visibility.VisibilityConditions;
  avantage2Text?: React.ReactNode;
  avantage3?: Types.Visibility.VisibilityConditions;
  avantage3Text?: React.ReactNode;
  avantage4?: Types.Visibility.VisibilityConditions;
  avantage4Text?: React.ReactNode;
  avantage5?: Types.Visibility.VisibilityConditions;
  avantage5Text?: React.ReactNode;
  avantage6?: Types.Visibility.VisibilityConditions;
  avantage6Text?: React.ReactNode;
  formCampaign?: Types.Builtin.Text;
  formInterestId?: Types.Builtin.Text;
  formSourceId?: Types.Builtin.Text;
  formBrandId?: Types.Builtin.Text;
}): React.JSX.Element;
