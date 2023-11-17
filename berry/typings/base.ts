export type ElementTypes = "success" | "info" | "wraning" | "danger" | "error";
export type ElementSize = "small" | "normal" | "large";

// 颜色断言
export type RGB = `rgb(${number},${number},${number})`;
export type RGBA = `rgba(${number},${number},${number},${number})`;
export type HEX = `#${string}`;