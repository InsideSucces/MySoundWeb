import { tv } from "@nextui-org/react";

export const WrapperLayout = tv( {
  base: "flex",
});

export const Flex = tv( {
  base:"border-box flex flex-row",
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      between: {
        alignItems: "space-between",
      },
    },
    wrap: {
      wrap: {
        flexWrap: "wrap",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
    },
  },
});

export const Box = tv( {
  base: "border-box",
});

const UnstyledSvg = tv({});
const UnstyledPath = tv({});
const UnstyledRect = tv({});

export const Svg = Object.assign(UnstyledSvg, {
  Path: UnstyledPath,
  Rect: UnstyledRect,
});

export const StyledBurgerButton = tv({
  base: "absolute flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer padding-0 z-[202] focus:outline-none [&_div]:w-6 [&_div]:h-px [&_div]:bg-default-900 [&_div]:rounded-xl  [&_div]:transition-all  [&_div]:relative  [&_div]:origin-[1px] ",

  variants: {
    open: {
      true: {
        "& > div": {
          "&:nth-child(1)": {
            marginTop: "0px",
            transform: "translateY(1px) rotate(45deg)",
          },
          "&:nth-child(2)": {
            display: "none",
            zIndex: "auto",
          },
          "&:nth-child(3)": {
            marginBottom: "0px",
            transform: "translateY(4px) rotate(-45deg)",
          },
        },
      },
    },
  },
  //   "",
  //   "& div": {

  //     "&:first-child": {
  //       transform: "translateY(-4px) rotate(0deg)",
  //       height: "1px",
  //       marginTop: "10px",
  //     },
  //     "&:nth-child(2)": {
  //       transform: "translateY(4px) rotate(0deg)",
  //       height: "1px",
  //       marginBottom: "10px",
  //     },
  //   },
  //   variants: {
  //     open: {
  //       true: {
  //         "& div": {
  //           "&:first-child": {
  //             marginTop: "0px",
  //             transform: "translateY(1px) rotate(45deg)",
  //           },
  //           "&:nth-child(2)": {
  //             marginBottom: "0px",
  //             transform: "translateY(4px) rotate(-45deg)",
  //           },
  //         },
  //       },
  //     },
  //   },
});