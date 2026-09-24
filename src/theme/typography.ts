export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

// fontSize (px) and lineHeight (multiplier) taken from the design system
export const typography = {
  h1: { fontFamily: fontFamily.bold, fontSize: 32, lineHeight: 1.2 },
  h2: { fontFamily: fontFamily.semibold, fontSize: 24, lineHeight: 1.3 },
  h3: { fontFamily: fontFamily.semibold, fontSize: 20, lineHeight: 1.3 },
  h4: { fontFamily: fontFamily.medium, fontSize: 16, lineHeight: 1.4 },
  bodyLarge: { fontFamily: fontFamily.regular, fontSize: 16, lineHeight: 1.6 },
  bodyMedium: { fontFamily: fontFamily.regular, fontSize: 14, lineHeight: 1.6 },
  bodySmall: { fontFamily: fontFamily.regular, fontSize: 13, lineHeight: 1.6 },
  caption: { fontFamily: fontFamily.regular, fontSize: 11, lineHeight: 1.4 },
} as const;
