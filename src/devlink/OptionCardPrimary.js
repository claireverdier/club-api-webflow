"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OptionCardPrimary.module.css";

export function OptionCardPrimary({
  as: _Component = _Builtin.Block,
  title = "OPTION BOOST",
  price = "50 €",
  slotContent,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "special-offer-card", "bg-linear-card-1")}
      id={_utils.cx(
        _styles,
        "w-node-_26865dc6-6c9d-76d5-49ec-8606c7add5bd-c7add5bd"
      )}
      tag="div"
      card-fade-up=""
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "d-flex-dir-col_ali-cen_gap-3")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-h4", "text-primary-g")}
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "text-h2-d")} tag="div">
          {price}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Section
        className={_utils.cx(_styles, "separator-bar", "bg-primary-b")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "separator-bar", "bg-primary-b")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  );
}
