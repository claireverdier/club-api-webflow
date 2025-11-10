"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OfferCardDetailedMedium.module.css";

export function OfferCardDetailedMedium({
  as: _Component = _Builtin.Block,
  title = "PREMIUM",
  chipsDisplay = true,
  chipsText = "TOP VENTE",
  bigTitle = "1 MOIS OFFERT",
  monthlyPricingText = "Puis 29,99 €/mois avec engagement*",
  yearlyPricingText = "",
  slotContent,
  starterpackTitle = "Starter pack 39,00 €",
  starterpackSubtitle = "Pour bien démarrer ! Payable à l’inscription.",
  btnDisplay = true,

  btnLink = {
    href: "#",
  },

  btnText = "Je m’abonne !",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "offer-card-detailed",
        "outlined-box-background-g"
      )}
      id={_utils.cx(
        _styles,
        "w-node-_6b0e0dae-97f7-915c-6122-6fab026f516a-026f516a"
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
            className={_utils.cx(_styles, "text-h4", "text-medium")}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          {chipsDisplay ? (
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "chips",
                "bg-light",
                "text-background-b"
              )}
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
        >
          {yearlyPricingText}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "separator-bar", "bg-background-g")}
        tag="div"
      />
      <_Builtin.NotSupported _atom="Slot" />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "offer-card-starter-pack-info",
          "outlined-box-background-g"
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
