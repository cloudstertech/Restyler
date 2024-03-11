import React, { PropsWithChildren } from "react";
import { createText, TextProps as ThemeTextProps } from "@shopify/restyle";
import { Theme } from "../../themes";


const Text = createText<Theme>();
export type TextProps = ThemeTextProps<Theme> & PropsWithChildren;

export default Text;
