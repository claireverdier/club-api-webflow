"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BannerTextOnly.module.css";

export function BannerTextOnly({
  as: _Component = _Builtin.Section,
  title = "QUESTIONS FRÉQUENTES",
  headline = "UNE QUESTION ?",
  text = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "bannerlegal")}
      tag="section"
      grid={{
        type: "section",
      }}
      fade-up-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "banner-legal-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "banner-tcc-title-container")}
            id={_utils.cx(
              _styles,
              "w-node-da53d188-eed3-ff1b-2b82-fd8a369bc978-369bc975"
            )}
            tag="div"
          >
            <_Builtin.HFlex
              className={_utils.cx(_styles, "gap-2")}
              tag="div"
              text-fade-up=""
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-body-2",
                  "text-medium",
                  "text-upper"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Keepcool"}
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-body-2", "text-medium")}
                tag="div"
              >
                {">"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-body-2",
                  "text-medium",
                  "text-upper"
                )}
                tag="div"
              >
                {headline}
              </_Builtin.Block>
            </_Builtin.HFlex>
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-h1-d",
                "r-xl-text-h0-d",
                "word-break"
              )}
              tag="h1"
              heading-text-split=""
            >
              {title}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-body", "text-medium")}
              tag="div"
              text-fade-up=""
            >
              {text}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
