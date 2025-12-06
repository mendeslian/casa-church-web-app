import React from "react";
import { toast } from "react-toastify";
import Logo from "../assets/logo.png";

const baseOptions = {
  containerId: "global",
  icon: React.createElement("img", {
    src: Logo,
    alt: "Casa Church",
  }),
  style: {
    background: "#0f1115",
    color: "#fff",
    border: "1px solid rgba(27, 29, 32)",
  },
};

const buildContent = (message) =>
  React.createElement(
    "div",
    { className: "space-y-1" },
    React.createElement(
      "div",
      { className: "font-semibold text-white text-[10px] uppercase" },
      "Casa Church"
    ),
    React.createElement(
      "div",
      { className: "text-white/80 text-[14px]" },
      message
    )
  );

export const toastError = (message, options) =>
  toast.error(buildContent(message), { ...baseOptions, ...options });

export const toastSuccess = (message, options) =>
  toast.success(buildContent(message), { ...baseOptions, ...options });

export const toastInfo = (message, options) =>
  toast.info(buildContent(message), { ...baseOptions, ...options });

export const toastWarn = (message, options) =>
  toast.warn(buildContent(message), { ...baseOptions, ...options });
