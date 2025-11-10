"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./KeyPoint.module.css";

export function KeyPoint({
  as: _Component = _Builtin.Block,
  illustration = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3ab5_image.svg",
  title = "Titre",
  description = (
    <>
      {"Description"}
      <br />
    </>
  ),
}) {
  return (
    <_Component className={_utils.cx(_styles, "d-flex-gap-6")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "bg-ilu-kp")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={illustration}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "d-flex-dir-col_gap-1")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "text-h5")} tag="div">
          {title}
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "text-body-2",
            "text-medium",
            "text-wrap-bal"
          )}
        >
          {description}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
