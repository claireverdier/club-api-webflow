"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TexteSeo.module.css";

export function TexteSeo({
  as: _Component = _Builtin.Section,
  headline = "CONDITIONS",
  title = "Service",
  text = "Service Training Xperience (ou TX) : Prix d’une Séance : 60 euros dans les Clubs de Paris et La Défense et 40 euros dans les autres Clubs d’Ile de France et de Lyon ; prix d’un pack de 5 Séances : 250 euros dans les Clubs de Paris et La Défense et 180 euros dans les autres Clubs d’Ile de France et de Lyon ; prix d’un Pack de 10 Séances : 400 euros dans les Clubs de Paris et La Défense et 300 euros dans les autres Clubs d’Ile de France et de Lyon. Une Séance de Training Xperience (ou TX) comprend une heure d’accompagnement sportif individuel en Fitness avec un coach Neoness à 1, 2 ou 3 personnes maximum. Les Séances de Training Xperience sont personnelles et doivent être utilisées dans le Club d’achat, pour une seule Séance achetée : dans le mois qui suit l’achat ; pour un pack de 5 Séances acheté : dans les 3 mois qui suivent l’achat ; pour un pack de 10 Séances acheté : dans les 6 mois qui suivent l’achat. Les Séances se font sur réservation par le Client auprès du Club, selon les disponibilités des coachs. Toute annulation ou report de réservation de Séance par le Client doit être faite par email envoyé au Club au moins 3 jours ouvrables avant la date prévue de la Séance, à défaut de quoi ladite Séance sera décomptée et ne pourra donc plus être utilisée. Neoness pourra exceptionnellement annuler une Séance et préviendra alors le Client pour lui proposer une nouvelle date. Les Séances de Training Xperience sont réservées aux personnes physiques majeures, elles sont non échangeables, non transmissibles et non remboursable.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "textseo")}
      tag="section"
      grid={{
        type: "section",
      }}
      fade-up-trigger=""
      id="testimonies-swiper"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "d-grid-col-1_gap-10")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-flex-dir-col_ali-cen-cen_gap-1",
              "_w-full"
            )}
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
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-ali-cen",
                "text-h2",
                "r-xl-text-ali-l",
                "md-text-h3"
              )}
              heading-text-split=""
            >
              {title}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-medium", "text-ali-cen")}
            id={_utils.cx(
              _styles,
              "w-node-_80ae172f-cffc-57f4-4900-a39c63ad7c89-63ad7c81"
            )}
            tag="div"
            text-fade-up=""
          >
            {text}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
