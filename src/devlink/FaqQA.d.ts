import * as React from "react";
import * as Types from "./types";

declare function FaqQA(props: {
  as?: React.ElementType;
  question?: React.ReactNode;
  answer?: Types.Basic.RichTextChildren;
  categorie?: Types.Builtin.Text;
}): React.JSX.Element;
