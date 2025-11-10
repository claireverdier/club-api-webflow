"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LessonsCardLarge.module.css";

export function LessonsCardLarge({
  as: _Component = _Builtin.Link,
  lessonCardCover = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b64_Keepcool.webp",
  lessonCardTitle = "Boxing",
  lessonCardDescription = "Peu importe votre niveau, profitez de cours encadrés par nos super coachs",
  lessonCardButtonText = "Découvrir le cours",

  lessonCardLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "card-0",
        "bg-background-g",
        "_w-full",
        "overflow-hidden",
        "h-full"
      )}
      button={false}
      text-fade-up=""
      block="inline"
      options={lessonCardLink}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "lesson-card-cover-large",
          "overflow-clip"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "h-full", "_w-full")}
          width="auto"
          height="auto"
          loading="lazy"
          card-thumbnail=""
          alt=""
          src={lessonCardCover}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "d-flex-dir-col_gap-4",
          "p-6",
          "h-full",
          "_w-full"
        )}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "text-h4")} tag="h3">
          {lessonCardTitle}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "text-medium")}>
          {lessonCardDescription}
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "btn",
            "bg-background",
            "_w-full",
            "mt-auto",
            "text-ali-cen"
          )}
        >
          {lessonCardButtonText}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
