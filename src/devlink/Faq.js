"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FaqQA } from "./FaqQA";
import * as _utils from "./utils";
import _styles from "./Faq.module.css";

export function Faq({
  as: _Component = _Builtin.Section,
  headline = "",
  title = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "titletext")}
      grid={{
        type: "section",
      }}
      tag="section"
      fade-up-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "d-grid-col-1_gap-8",
            "r-xl-col-2_spn-5-7_ali-top"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex-dir-col_gap-1")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-h5",
                "text-medium",
                "text-upper"
              )}
              tag="div"
              text-fade-up=""
            >
              {headline}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-ali-cen",
                "r-xl-text-ali-l-sm-text-ali-l",
                "md-text-h3"
              )}
              tag="h2"
              heading-text-split=""
            >
              {title}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
