"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardKeyPoints4C.module.css";

export function CardKeyPoints4C({
  as: _Component = _Builtin.Section,
  keyPoints,
  cardKeyPointDisplay = true,
}) {
  return cardKeyPointDisplay ? (
    <_Component
      className={_utils.cx(_styles, "cardkeypoints")}
      grid={{
        type: "section",
      }}
      tag="section"
      animate-card-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "card-10-8",
            "_w-full",
            "bg-background-g"
          )}
          tag="div"
          animate-card=""
        >
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
