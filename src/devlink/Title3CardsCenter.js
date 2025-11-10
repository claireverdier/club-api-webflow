"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Title3CardsCenter.module.css";

export function Title3CardsCenter({
  as: _Component = _Builtin.Section,
  slotContent,
  headline = "AVANTAGES DE L’OFFRE",
  title = "TES AVANTAGES PRIME",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "avantagesprimes")}
      grid={{
        type: "section",
      }}
      tag="div"
      fade-up-trigger=""
      id="lessons-swiper"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.VFlex
          className={_utils.cx(_styles, "d-flex-dir-col_gap-20")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-flex-dir-col_ali-cen-cen_gap-1",
              "_w-full"
            )}
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
                "r-xl-text-ali-l",
                "md-text-h3"
              )}
              tag="h2"
              heading-text-split=""
            >
              {title}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.VFlex>
      </_Builtin.Block>
    </_Component>
  );
}
