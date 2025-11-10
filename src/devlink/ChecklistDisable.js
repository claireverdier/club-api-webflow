"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ChecklistDisable.module.css";

export function ChecklistDisable({
  as: _Component = _Builtin.Block,
  text = "Checklist",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "d-flex-gap-4", "opacity-24")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "bullet-point-check-dark")}
        tag="div"
      >
        {""}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-h6", "text-light")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
