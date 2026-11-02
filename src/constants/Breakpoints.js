const breakpoints = {
  zero: 0,
  xs: "380px",
  sm: "576px",
  md: "768px",
  ipadAir: "820px",
  lg: "992px",
  ipadPro: "1024px",
  xl: "1200px",
  macBookAir: "1280px",
  xxl: "1400px",
  xxxl: "1600px",
  xxxxl: "1800px",
};

export const devicesBreakpoints = {
  macBookAir: "(max-width: 1280px) and (max-height: 900px)",
  xl: "(min-width: 1200px)",
  desktop: "(min-width: 991.98px)",
  portable: "(max-width: 991.98px)",
  ipadPro: "(max-width: 1024px)",
  ipadAir: "(max-width: 820px)",
  lapAndUp: "(min-width: 767.98px)",
  pocket: "(max-width: 767.98px)",
  handheldAndUp: "(min-width: 575.98px)",
  thumb: "(max-width: 575.98px)",
  medium: "(min-width: 575.98px) and (max-width: 991.98px)",
  mediumUp: "(min-width: 767.98px) and (max-width: 991.98px)",
  mediumDown: "(min-width: 575.98px) and (max-width: 767.98px)",
  small: "(max-width: 424.98px)",
  xSmall: "(max-width: 374.98px)",
};

export default breakpoints;