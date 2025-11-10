"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OptionCardMediumColor.module.css";

export function OptionCardMediumColor({
  as: _Component = _Builtin.Block,
  title = "TRAINING XPERIENCE",
  price = "40 €",
  slotContent,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "special-offer-card",
        "outlined-box-background-g"
      )}
      id={_utils.cx(
        _styles,
        "w-node-_29715202-4e74-abb2-67e8-c4e297119330-97119330"
      )}
      tag="div"
      card-fade-up=""
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "d-flex-dir-col_ali-cen_gap-3")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-h4", "text-medium")}
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-h2-d", "text-light")}
          tag="div"
        >
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
            className={_utils.cx(_styles, "separator-bar", "bg-background-g")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  );
}
