"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ChecklistItem.module.css";

export function ChecklistItem({
  as: _Component = _Builtin.Block,
  text = "1 séance de coaching",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "d-flex-gap-4")}
      tag="div"
      text-fade-up=""
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "bullet-point-check-primary")}
        tag="div"
      >
        {""}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "text-h4")} tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
