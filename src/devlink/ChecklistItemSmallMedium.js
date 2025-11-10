"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ChecklistItemSmallMedium.module.css";

export function ChecklistItemSmallMedium({
  as: _Component = _Builtin.Block,
  title = "Checklist",
}) {
  return (
    <_Component className={_utils.cx(_styles, "d-flex-gap-4")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "bullet-point-check-dark")}
        tag="div"
      >
        {""}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-h6", "text-light")}
        tag="div"
      >
        {title}
      </_Builtin.Block>
    </_Component>
  );
}
