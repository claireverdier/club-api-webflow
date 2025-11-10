"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Chips.module.css";

export function Chips({
  as: _Component = _Builtin.Link,
  chipsText = "Chips",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "chips", "bg-background-g")}
      button={false}
      block=""
      options={link}
    >
      {chipsText}
    </_Component>
  );
}
