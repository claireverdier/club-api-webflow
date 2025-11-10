"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachingOptions.module.css";

export function CoachingOptions({
  as: _Component = _Builtin.Section,
  title = "Titre",
  headline = "Un coaching ultra personnalisé",
  description = "votre coach personnalise votre programme en fonctions de vos besoins et objectifs.",

  btnLink = {
    href: "#",
  },

  btnDisplay = true,
  btnText = "Découvrir",
  slotContent,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "optionscoaching")}
      grid={{
        type: "section",
      }}
      tag="div"
      fade-up-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "options-coaching")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex-dir-col_gap-8")}
            id={_utils.cx(
              _styles,
              "w-node-bc83a319-7f47-03c8-4f9e-7897e24594d0-e24594cd"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-dir-col_gap-4")}
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
                  className={_utils.cx(_styles, "md-text-h3")}
                  tag="h2"
                  heading-text-split=""
                >
                  {title}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "text-body", "text-medium")}
                text-fade-up=""
              >
                {description}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            {btnDisplay ? (
              <_Builtin.Link
                className={_utils.cx(_styles, "btn", "outlined-box-light")}
                button={false}
                dyn={{
                  bind: {},
                }}
                text-fade-up=""
                block="inline"
                options={btnLink}
              >
                <_Builtin.Block tag="div">{btnText}</_Builtin.Block>
              </_Builtin.Link>
            ) : null}
          </_Builtin.Block>
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
