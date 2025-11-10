"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ChecklistItemSmall } from "./ChecklistItemSmall";
import { FormLeadLp } from "./FormLeadLp";
import * as _utils from "./utils";
import _styles from "./Formulaire.module.css";

export function Formulaire({
  as: _Component = _Builtin.Section,
  sousTitre = "Sous Titre",
  titre = "Pour profiter pleinement de ta séance découverte gratuite, prends :",
  avantage1 = true,
  avantage1Text = "Accès aux 270 clubs",
  avantage2 = true,
  avantage2Text = "Coaching digital inclus",
  avantage3 = true,
  avantage3Text = "Carte Duo",
  avantage4 = true,
  avantage4Text = "Parrainage",
  avantage5 = true,
  avantage5Text = "Pause vacances",
  avantage6 = true,
  avantage6Text = "Group training",
  formCampaign = "Keepcool Site : Session Offerte",
  formInterestId = "1",
  formSourceId = "1",
  formBrandId = "1",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "formulaire")}
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
            "card-20",
            "_w-full",
            "bg-background-g",
            "r-s-card-10-6"
          )}
          tag="div"
          animate-card=""
        >
          <_Builtin.Grid
            className={_utils.cx(_styles, "d-grid-col-12_gap-8", "r-md-col-1")}
            tag="div"
          >
            <_Builtin.VFlex
              className={_utils.cx(_styles, "gap-10")}
              id={_utils.cx(
                _styles,
                "w-node-_9e00fb9e-4b55-f5bd-eed0-995e78710881-7871087d"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "d-grid-col-1_gap-8", "_w-full")}
                tag="div"
              >
                <_Builtin.VFlex
                  className={_utils.cx(_styles, "gap-1")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_9e00fb9e-4b55-f5bd-eed0-995e78710883-7871087d"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-medium")}
                    tag="div"
                  >
                    {sousTitre}
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "text-h3")}
                    tag="h2"
                  >
                    {titre}
                  </_Builtin.Heading>
                </_Builtin.VFlex>
              </_Builtin.Block>
              <_Builtin.VFlex
                className={_utils.cx(_styles, "gap-6")}
                id={_utils.cx(
                  _styles,
                  "w-node-_9e00fb9e-4b55-f5bd-eed0-995e78710888-7871087d"
                )}
                tag="div"
              >
                <ChecklistItemSmall
                  text={avantage1Text}
                  afficherItem={avantage1}
                />
                <ChecklistItemSmall
                  text={avantage2Text}
                  afficherItem={avantage2}
                />
                <ChecklistItemSmall
                  text={avantage3Text}
                  afficherItem={avantage3}
                />
                <ChecklistItemSmall
                  text={avantage4Text}
                  afficherItem={avantage4}
                />
                <ChecklistItemSmall
                  text={avantage5Text}
                  afficherItem={avantage5}
                />
                <ChecklistItemSmall
                  text={avantage6Text}
                  afficherItem={avantage6}
                />
              </_Builtin.VFlex>
            </_Builtin.VFlex>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-ali-cen-cen")}
              id={_utils.cx(
                _styles,
                "w-node-_9e00fb9e-4b55-f5bd-eed0-995e78710895-7871087d"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "separator-vertical")}
                id={_utils.cx(
                  _styles,
                  "w-node-_9e00fb9e-4b55-f5bd-eed0-995e78710896-7871087d"
                )}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              id={_utils.cx(
                _styles,
                "w-node-_9e00fb9e-4b55-f5bd-eed0-995e78710897-7871087d"
              )}
              tag="div"
            >
              <FormLeadLp
                campaignFieldValue={formCampaign}
                interestIdFieldValue={formInterestId}
                sourceIdFieldValue={formSourceId}
                brandIdFieldValue={formBrandId}
              />
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
