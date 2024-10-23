"use client";

import NextImage, { ImageProps, StaticImageData } from "next/image";
import { memo } from "react";

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: any, e2: any, e3: any) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: any, g: any, b: any) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const defaultBlurImageProps = {
  placeholder: "blur",
  blurDataURL: rgbDataURL(238, 238, 238),
};

const Image = (props: ImageProps) => {
  const { width, height, fill } = props;

  // 'Image with src "..." is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance' warning
  const useBlurPlaceHolder = !(
    !fill &&
    Number(width) <= 40 &&
    Number(height) <= 40
  );

  const newProps: ImageProps = Object.assign(
    {},
    useBlurPlaceHolder ? defaultBlurImageProps : {},
    props,
  );

  return <NextImage {...newProps} />;
};

export default memo(Image);
