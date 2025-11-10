import * as React from "react";
import * as Types from "./types";

declare function PostsCardFeatured(props: {
  as?: React.ElementType;
  postCardCover?: Types.Asset.Image;
  postCardHeadline?: React.ReactNode;
  postCardTitle?: React.ReactNode;
  postCardLink?: Types.Basic.Link;
}): React.JSX.Element;
