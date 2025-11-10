"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { KeyPoint } from "./KeyPoint";
import * as _utils from "./utils";
import _styles from "./CardKeyPoints3C.module.css";

export function CardKeyPoints3C({
  as: _Component = _Builtin.Section,
  iconN1 = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b06_Coachs.svg",
  titleN1 = "Un coaching ultra personnalisé",
  textN1 = "Votre coach personnalise votre programme en fonctions de vos besoins et objectifs.",
  iconN2 = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b18_Performance.svg",
  titleN2 = "La performance",
  textN2 = "Votre coach vous accompagne, vous boost et vous aide à dépasser vos limites !",
  iconN3 = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b19_Bien-Etre.svg",
  titleN3 = "Le bien-être",
  textN3 = "Votre coach sera votre meilleur allié pour développer votre bien-être au quotidien.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "cardkeypoints")}
      grid={{
        type: "section",
      }}
      tag="section"
      animate-card-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "card-10-8",
            "_w-full",
            "bg-background-g"
          )}
          tag="div"
          animate-card=""
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-grid-col-3",
              "r-md-col-1",
              "_w-full"
            )}
            tag="div"
          >
            <KeyPoint
              illustration={iconN1}
              title={titleN1}
              description={textN1}
            />
            <KeyPoint
              illustration={iconN2}
              title={titleN2}
              description={textN2}
            />
            <KeyPoint
              illustration={iconN3}
              title={titleN3}
              description={textN3}
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
