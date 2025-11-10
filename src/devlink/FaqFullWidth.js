"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FaqQA } from "./FaqQA";
import * as _utils from "./utils";
import _styles from "./FaqFullWidth.module.css";

export function FaqFullWidth({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "faqfullwidth")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "d-grid-col-1_gap-8")}
          tag="div"
        >
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
