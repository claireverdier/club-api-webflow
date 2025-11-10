"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Banner.module.css";

export function Banner({
  as: _Component = _Builtin.Section,
  textDesktop = "",
  textMobile = "",
  buttonText = "J’en profite !",

  buttonLink = {
    href: "https://subscribe.keepcool.fr/",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "banner", "bg-primary")}
      grid={{
        type: "section",
      }}
      tag="section"
      id="header-offer-banner"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "banner-container")}
          tag="div"
        >
          <_Builtin.RichText
            className={_utils.cx(
              _styles,
              "banner-rich-text",
              "text-background",
              "r-xs-hide"
            )}
            tag="div"
            slot=""
          >
            {textDesktop}
          </_Builtin.RichText>
          <_Builtin.RichText
            className={_utils.cx(
              _styles,
              "banner-rich-text",
              "text-background",
              "r-lg-md-s-hide"
            )}
            tag="div"
            slot=""
          >
            {textMobile}
          </_Builtin.RichText>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "btn",
              "bg-background-b",
              "is-small",
              "d-flex-no-grow-shrink"
            )}
            id={_utils.cx(
              _styles,
              "w-node-d4b5a896-b837-c286-b433-74898ccfa684-8ccfa66a"
            )}
            button={true}
            block=""
            options={buttonLink}
          >
            {buttonText}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
