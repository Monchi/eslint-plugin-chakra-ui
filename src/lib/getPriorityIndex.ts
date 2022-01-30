const priority = {
  // System
  System: 0,
  ComponentSpecificProps: 1,

  // Positioning
  Position: 10,

  // Box Model
  Flexbox: 20,
  "Grid Layout": 21,
  Layout: 22,
  Width: 23,
  Height: 24,
  Margin: 25,
  Padding: 26,

  // Typography
  Color: 30,
  Typography: 31,

  // Visual
  Background: 40,
  Border: 41,
  "Border Radius": 42,

  // Misc
  Shadow: 50,
  Pseudo: 51,
  "Other Style Props": 52,
} as const;
type Priority = typeof priority;

type PriorityGroup = {
  name: string;
  keys: readonly string[];
  priority: Priority[keyof Priority];
};

const priorityGroups: readonly PriorityGroup[] = [
  {
    name: "System",
    keys: ["as", "sx", "layerStyle", "textStyle"],
    priority: priority["System"],
  },
  {
    name: "ComponentSpecificProps",
    keys: [], // TODO
    priority: priority["ComponentSpecificProps"],
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
      "marginBottom",
      "ml",
      "marginLeft",
      "ms",
      "marginStart",
      "mx",
      "my",
    ],
    priority: priority["Margin"],
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
    priority: priority["Padding"],
  },
  {
    name: "Color",
    keys: ["color", "textColor", "fill", "stroke"],
    priority: priority["Color"],
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
    priority: priority["Typography"],
  },
  {
    name: "Width",
    keys: ["w", "width", "minW", "minWidth", "maxW", "maxWidth"],
    priority: priority["Width"],
  },
  {
    name: "Height",
    keys: ["h", "height", "minH", "minHeight", "maxH", "maxHeight"],
    priority: priority["Height"],
  },
  {
    name: "Layout",
    keys: ["d", "display", "boxSize", "verticalAlign", "overflow", "overflowX", "overflowY"],
    priority: priority["Layout"],
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
    priority: priority["Flexbox"],
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
    priority: priority["Grid Layout"],
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
    priority: priority["Background"],
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
    priority: priority["Border"],
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
    priority: priority["Border Radius"],
  },
  {
    name: "Position",
    keys: ["pos", "position", "zIndex", "top", "right", "bottom", "left"],
    priority: priority["Position"],
  },
  {
    name: "Shadow",
    keys: ["textShadow", "shadow", "boxShadow"],
    priority: priority["Shadow"],
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
    priority: priority["Pseudo"],
  },
  {
    name: "Other Style Props",
    keys: [
      "animation",
      "appearance",
      "transform",
      "transformOrigin",
      "visibility",
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
      "outline",
    ],
    priority: priority["Other Style Props"],
  },
];

const FIRST_PROPS = -1;
const OTHER_PROPS = 1000;
const LAST_PROPS = Number.MAX_SAFE_INTEGER;

export function getPriority(key: string, config: { firstProps: string[]; lastProps: string[] }): number {
  const { firstProps, lastProps } = config;

  if (firstProps.includes(key)) {
    return FIRST_PROPS;
  }
  if (lastProps.includes(key)) {
    return LAST_PROPS;
  }

  const index = priorityGroups.findIndex((group) => {
    return group.keys.includes(key);
  });
  if (index !== -1) {
    return priorityGroups[index].priority;
  }

  return OTHER_PROPS;
}

export const priorityGroupsLength = priorityGroups.length;

export const getIndexInPriority = (key: string, groupIndex: number): number => {
  const keys = priorityGroups[groupIndex].keys;
  const index = keys.indexOf(key);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};
