type PriorityGroup = {
  name: string;
  keys: readonly string[];
  isIncluded?: undefined;
};

const priorityGroups: readonly PriorityGroup[] = [
  {
    name: "System",
    keys: ["as", "key", "sx", "layerStyle", "textStyle"],
  },
  {
    name: "Margin",
    keys: [
      "m",
      "margin",
      "mt",
      "marginTop",
      "mr",
      "marginRight",
      "me",
      "marginEnd",
      "mb",
      "marginBotto",
      "ml",
      "marginLeft",
      "ms",
      "marginStart",
      "mx",
      "my",
    ],
  },
  {
    name: "Padding",
    keys: [
      "p",
      "padding",
      "pt",
      "paddingTop",
      "pr",
      "paddingRight",
      "pe",
      "paddingEnd",
      "pb",
      "paddingBotto",
      "pl",
      "paddingLeft",
      "ps",
      "paddingStart",
      "px",
      "py",
    ],
  },
  {
    name: "Color",
    keys: ["color", "textColor", "fill", "stroke"],
  },
  {
    name: "Typography",
    keys: [
      "fontFamily",
      "fontSize",
      "fontWeight",
      "lineHeight",
      "letterSpacing",
      "textAlign",
      "fontStyle",
      "textTransform",
      "textDecoration",
    ],
  },
  {
    name: "Width",
    keys: ["w", "width", "minW", "minWidth", "maxW", "maxWidth"],
  },
  {
    name: "Height",
    keys: ["h", "height", "minH", "minHeight", "maxH", "maxHeight"],
  },
  {
    name: "Layout",
    keys: ["d", "display", "boxSize", "verticalAlign", "overflow", "overflowX", "overflowY"],
  },
  {
    name: "Flexbox",
    keys: [
      "alignItems",
      "align",
      "alignContent",
      "justifyItems",
      "justifyContent",
      "justify",
      "flexWrap",
      "wrap",
      "flexDirection",
      "flexDir",
      "direction",
      "flex",
      "flexGrow",
      "flexShrink",
      "flexBasis",
      "justifySelf",
      "alignSelf",
      "order",
    ],
  },
  {
    name: "Grid Layout",
    keys: [
      "gridGap",
      "gap",
      "gridRowGap",
      "rowGap",
      "gridColumnGap",
      "columnGap",
      "gridColumn",
      "column",
      "gridRow",
      "row",
      "gridArea",
      "area",
      "gridAutoFlow",
      "autoFlow",
      "gridAutoRows",
      "autoRows",
      "gridAutoColumns",
      "autoColumns",
      "gridTemplateRows",
      "templateRows",
      "gridTemplateColumns",
      "templateColumns",
      "gridTemplateAreas",
      "templateAreas",
    ],
  },
  {
    name: "Background",
    keys: [
      "bg",
      "background",
      "bgImage",
      "backgroundImage",
      "bgSize",
      "backgroundSize",
      "bgPosition",
      "backgroundPosition",
      "bgRepeat",
      "backgroundRepeat",
      "bgAttachment",
      "backgroundAttachment",
      "bgGradient",
      "bgClip",
      "backgroundClip",
      "opacity",
    ],
  },
  {
    name: "Border",
    keys: [
      "border",
      "borderWidth",
      "borderStyle",
      "borderColor",
      "borderTop",
      "borderTopWidth",
      "borderTopStyle",
      "borderTopColor",
      "borderRight",
      "borderRightWidth",
      "borderRightStyle",
      "borderRightColor",
      "borderBottom",
      "borderBottomWidth",
      "borderBottomStyle",
      "borderBottomColor",
      "borderLeft",
      "borderLeftWidth",
      "borderLeftStyle",
      "borderLeftColor",
      "borderStart",
      "borderStartWidth",
      "borderStartStyle",
      "borderStartColor",
      "borderEnd",
      "borderEndWidth",
      "borderEndStyle",
      "borderEndColor",
      "borderX",
      "borderY",
    ],
  },
  {
    name: "Border Radius",
    keys: [
      "borderRadius",
      "borderTopLeftRadius",
      "borderTopStartRadius",
      "borderTopRightRadius",
      "borderTopEndRadius",
      "borderBottomRightRadius",
      "borderBottomEndRadius",
      "borderBottomLeftRadius",
      "borderBottomStartRadius",
      "borderTopRadius",
      "borderRightRadius",
      "borderEndRadius",
      "borderBottomRadius",
      "borderLeftRadius",
      "borderStartRadius",
    ],
  },
  {
    name: "Position",
    keys: ["pos", "position", "zIndex", "top", "right", "bottom", "left"],
  },
  {
    name: "Shadow",
    keys: ["textShadow", "shadow", "boxShadow"],
  },
  {
    name: "Pseudo",
    keys: [
      "_hover",
      "_active",
      "_focus",
      "_highlighted",
      "_focusWithin",
      "_focusVisible",
      "_disabled",
      "_readOnly",
      "_before",
      "_after",
      "_empty",
      "_expanded",
      "_checked",
      "_grabbed",
      "_pressed",
      "_invalid",
      "_valid",
      "_loading",
      "_selected",
      "_hidden",
      "_autofill",
      "_even",
      "_odd",
      "_first",
      "_last",
      "_notFirst",
      "_notLast",
      "_visited",
      "_activeLink",
      "_activeStep",
      "_indeterminate",
      "_groupHover",
      "_peerHover",
      "_groupFocus",
      "_peerFocus",
      "_groupFocusVisible",
      "_peerFocusVisible",
      "_groupActive",
      "_groupDisabled",
      "_peerDisabled",
      "_groupInvalid",
      "_peerInvalid",
      "_groupChecked",
      "_peerChecked",
      "_groupFocusWithin",
      "_peerFocusWithin",
      "_peerPlaceholderShown",
      "_placeholder",
      "_placeholderShown",
      "_fullScreen",
      "_selection",
      "_rtl",
      "_ltr",
      "_mediaDark",
      "_mediaReduceMotion",
      "_dark",
      "_light",
    ],
  },
  {
    name: "Other Style Props",
    keys: [
      "animation",
      "appearance",
      "transform",
      "transformOrigin",
      "visiblity",
      "whiteSpace",
      "userSelect",
      "pointerEvents",
      "wordBreak",
      "overflowWrap",
      "textOverflow",
      "boxSizing",
      "cursor",
      "resize",
      "transition",
      "objectFit",
      "objectPosition",
      "float",
      "fill",
      "stroke",
      "outline",
    ],
  },
];

export function getPriorityIndex(key: string): number {
  const index = priorityGroups.findIndex((group) => {
    return group.keys.includes(key);
  });
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}
