import * as React from "react";
import * as Types from "./types";

declare function RichText(props: {
  as?: React.ElementType;
  richText?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
