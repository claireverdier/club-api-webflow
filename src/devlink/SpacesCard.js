"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SpacesCard.module.css";

export function SpacesCard({
  as: _Component = _Builtin.Block,
  spaceCardCover = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b5a_artcile-keepcool.jpg",
  spaceCardTitle = "Title",
  spaceCardDescription = "Capital Meilleure Enseigne 2023",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "space-card")}
      tag="div"
      text-fade-up=""
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "space-card-cover")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={spaceCardCover}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "post-card-info-copy")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-h4", "text-upper")}
          tag="h3"
          fs-cmsfilter-field="category"
        >
          {spaceCardTitle}
        </_Builtin.Heading>
        <_Builtin.Block tag="div">{spaceCardDescription}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
