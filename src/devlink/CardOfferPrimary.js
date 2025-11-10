"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardOfferPrimary.module.css";

export function CardOfferPrimary({
  as: _Component = _Builtin.Block,
  title = "OFFRE SPÉCIALE",
  price = "9,99 €",
  subtitle = "Par mois pendant 6 mois",
  slotContent,
  btnText = "J’en profite",

  btnLink = {
    href: "#",
  },

  btnDisplay = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "special-offer-card", "bg-linear-card-1")}
      id={_utils.cx(
        _styles,
        "w-node-_55a63ab2-c136-ef25-8338-0b26d4300dd5-d4300dd5"
      )}
      tag="div"
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
        <_Builtin.Block className={_utils.cx(_styles, "text-body-2")} tag="div">
          {subtitle}
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
      {btnDisplay ? (
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "btn",
            "bg-background-b",
            "_w-full",
            "mt-auto"
          )}
          button={false}
          dyn={{
            bind: {},
          }}
          block="inline"
          options={btnLink}
        >
          <_Builtin.Block tag="div">{btnText}</_Builtin.Block>
        </_Builtin.Link>
      ) : null}
    </_Component>
  );
}
