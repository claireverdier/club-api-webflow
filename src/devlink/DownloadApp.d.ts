import * as React from "react";
import * as Types from "./types";

declare function DownloadApp(props: {
  as?: React.ElementType;
  downloadArguments?: Types.Slots.SlotContent;
  downloadAppIllustration?: Types.Asset.Image;
  headline?: React.ReactNode;
  title?: React.ReactNode;
}): React.JSX.Element;
