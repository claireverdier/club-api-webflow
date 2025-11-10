"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PostsCard.module.css";

export function PostsCard({
  as: _Component = _Builtin.Link,
  postCardCover = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b5a_artcile-keepcool.jpg",
  postCardHeadline = "ACTU",
  postCardTitle = "Capital Meilleure Enseigne 2023",

  postCardLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "post-card")}
      button={false}
      card-fade-up=""
      block="inline"
      options={postCardLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "post-card-cover", "overflow-hidden")}
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          card-thumbnail=""
          alt=""
          src={postCardCover}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "post-card-info")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-body-2",
            "text-medium",
            "text-upper"
          )}
          tag="div"
          fs-cmsfilter-field="category"
        >
          {postCardHeadline}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "d-none")}
          tag="div"
          fs-cmsfilter-field="category"
        >
          {"Tous"}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "text-h5")} tag="div">
          {postCardTitle}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
