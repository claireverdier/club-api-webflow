"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OfferCardDetailedPrimary.module.css";

export function OfferCardDetailedPrimary({
  as: _Component = _Builtin.Block,
  title = "PRIME",
  chipsDisplay = true,
  chipsText = "TOP VENTE",
  bigTitle = "2 MOIS OFFERTS",
  monthlyPricingText = "Puis 34,99 €/mois avec engagement*",
  yearlyPricingText = "",
  slotContent,
  btnText = "Je m’abonne !",
  btnDisplay = true,

  btnLink = {
    href: "#",
  },

  starterpackTitle = "Starter pack 39,00 €",
  starterpackSubtitle = "Pour bien démarrer ! Payable à l’insription.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "offer-card-detailed", "bg-linear-card-1")}
      id={_utils.cx(
        _styles,
        "w-node-bcef9a92-79dd-6c36-beda-147748d35741-48d35741"
      )}
      tag="div"
      card-fade-up=""
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "d-flex-dir-col_ali-cen_gap-3")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "d-flex-gap-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-h4", "text-primary-g")}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          {chipsDisplay ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "chips", "bg-light")}
              tag="div"
            >
              {chipsText}
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "text-h2-d")} tag="div">
          {bigTitle}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-body-2", "js-pricing-item")}
          tag="div"
          data-pricing="monthly"
        >
          {monthlyPricingText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-body-2",
            "js-pricing-item",
            "is-yearly"
          )}
          tag="div"
          data-pricing="yearly"
          styler="display: none;"
        >
          {yearlyPricingText}
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
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "offer-card-starter-pack-info",
          "outlined-box-primary-b",
          "text-background-b"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-h5", "text-ali-cen")}
          tag="div"
        >
          {starterpackTitle}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-body-2", "text-ali-cen")}
          tag="div"
        >
          {starterpackSubtitle}
        </_Builtin.Block>
      </_Builtin.Block>
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
