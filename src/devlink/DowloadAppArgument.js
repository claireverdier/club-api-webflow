"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DowloadAppArgument.module.css";

export function DowloadAppArgument({
  as: _Component = _Builtin.Block,
  title = "Titre",
  description = "Votre coach personnalise votre programme en fonctions de vos besoins et objectifs.",
  descriptionVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-10", "bg-background-g", "_w-full")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "text-h4")} tag="div">
        {title}
      </_Builtin.Block>
      {descriptionVisibility ? (
        <_Builtin.Paragraph>{description}</_Builtin.Paragraph>
      ) : null}
    </_Component>
  );
}
