import localFont from "next/font/local";

export const fontNunito = localFont({
  src: [
    {
      path: "../public/fonts/Nunito.ttf",
      weight: "400",
    },
  ],
  variable: "--font-nunito",
});

export const fontAleo = localFont({
  src: [
    {
      path: "../public/fonts/Aleo.ttf",
      weight: "400",
    },
  ],
  variable: "--font-aleo",
});
