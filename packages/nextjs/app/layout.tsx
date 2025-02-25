import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Batch #13 - BuidlGuidl 🏰🧑‍🏫",
  description:
    "🚀🏰 BuidlGuidl Batch 13: A passionate group of BuidlGuidl builders learning and working together! Built with Scaffold ETH 2 🏰🚀",
  icons: [
    { rel: "icon", url: "/Batch13-favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/Batch13-favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/Batch13-favicon-16x16.png" },
  ],
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
