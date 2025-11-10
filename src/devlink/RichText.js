"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RichText.module.css";

export function RichText({ as: _Component = _Builtin.Section, richText = "" }) {
  return (
    <_Component
      className={_utils.cx(_styles, "richtext")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "r-ld-max-width-8c")}
        tag="div"
      >
        <_Builtin.RichText
          className={_utils.cx(_styles, "rich-text")}
          tag="div"
          slot=""
        >
          {richText}
        </_Builtin.RichText>
      </_Builtin.Block>
    </_Component>
  );
}
