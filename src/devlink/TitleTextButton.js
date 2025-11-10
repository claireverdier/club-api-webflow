"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TitleTextButton.module.css";

export function TitleTextButton({
  as: _Component = _Builtin.Section,
  headline = "COACHING",
  title = "Mettre du sport dans vos vies",
  text = (
    <>
      {
        "Depuis plus de 15 ans, Keepcool a pour vocation de mettre du sport dans le quotidien des Français en le démocratisant et en le rendant accessible à tous."
      }
      <br />
      <br />
      {
        "Aujourd’hui plus que jamais, le sport est un pilier clé de notre santé et de notre bien-être. Il permet de se sentir bien dans sa tête et dans son corps, de se maintenir en forme et de s’évader le temps d’une séance."
      }
      <br />
      <br />
      {
        "L’humain au cœur de notre concept : Au cours de son évolution, Keepcool a toujours placé ses adhérents et ses coachs au centre de sa réflexion pour leur offrir la meilleure expérience possible. Chez nous, des coachs diplômés d’État sont présents dans chacun des 270 clubs pour offrir un accompagnement et un suivi personnalisés aux adhérents. Des questions ? Besoin de conseils ou de nouveaux exercices ? Ils sont à vos côtés lorsque vous le souhaitez."
      }
    </>
  ),

  buttonLink = {
    href: "#",
  },

  buttonText = "Contacter mon club",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "titletext")}
      grid={{
        type: "section",
      }}
      tag="section"
      fade-up-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "d-grid-col-1_gap-8",
            "r-xl-col-2_spn-5-7_ali-top"
          )}
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
              className={_utils.cx(
                _styles,
                "text-ali-cen",
                "r-xl-text-ali-l-sm-text-ali-l",
                "md-text-h3"
              )}
              tag="h2"
              heading-text-split=""
            >
              {title}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex-dir-col_gap-8")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-body")}
              tag="div"
              text-fade-up=""
            >
              {text}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "btn", "outlined-box-light")}
              button={true}
              text-fade-up=""
              block=""
              options={buttonLink}
            >
              {buttonText}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
