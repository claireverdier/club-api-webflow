"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ChecklistItemSmall.module.css";

export function ChecklistItemSmall({
  as: _Component = _Builtin.Block,
  afficherItem,
  text = "1 bouteille d’eau",
}) {
  return afficherItem ? (
    <_Component
      className={_utils.cx(_styles, "d-flex-ali-top_gap-4")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "bullet-point-check-primary")}
        tag="div"
      >
        {""}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "text-h5")} tag="div">
        {text}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
