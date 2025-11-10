"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DownloadApp.module.css";

export function DownloadApp({
  as: _Component = _Builtin.Section,
  downloadArguments,
  downloadAppIllustration = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3ab5_image.svg",
  headline = "",
  title = "UNE APP POUR t’ACCOMPAGNER DANS tes CHALLENGES",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "downloadapp")}
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
            "d-flex-dir-col_ali-cen-cen_gap-1",
            "mb-20",
            "_w-10c_xl",
            "mx-auto",
            "md-w-full"
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
          <_Builtin.Heading
            className={_utils.cx(_styles, "text-ali-cen", "md-text-h3")}
            tag="h2"
            heading-text-split=""
          >
            {title}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "d-grid-col-2",
            "r-xl-spn-5-7-md-col-1_ali-cen"
          )}
          tag="div"
          text-fade-up=""
        >
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-c0818a3d-206c-2cd3-6f4f-0c6ed5af78b5-d5af78ad"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={downloadAppIllustration}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex-dir-col_gap-10")}
            id={_utils.cx(
              _styles,
              "w-node-c0818a3d-206c-2cd3-6f4f-0c6ed5af78b6-d5af78ad"
            )}
            tag="div"
          >
            <_Builtin.NotSupported _atom="Slot" />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "d-flex-dir-col_gap-4",
                "r-xl-dir-row_ali-cen",
                "md-text-center",
                "md-w-full"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-body-2",
                  "text-medium",
                  "md-w-full"
                )}
                tag="div"
              >
                {"Télécharges l’application Keepcool"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "d-flex-gap-4",
                  "r-ali-cen",
                  "ml-auto",
                  "md-w-full"
                )}
                tag="div"
              >
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "https://apps.apple.com/fr/app/keepcool/id1582437445",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Bouton téléchargement AppStore"
                    src="https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3ae1_AppStore.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "https://play.google.com/store/apps/details?id=fr.keepcool.memberapp&hl=fr",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Bouton téléchargement Google Play\n"
                    src="https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3ac9_Google_Play.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
