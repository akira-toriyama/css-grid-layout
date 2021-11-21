import type { NextPage } from "next";
import { CheatSheet } from "~/presenter/component/CssArchitecturePerfectGuide/CheatSheet/1";
import { CSR } from "~/presenter/component/lib/CSR";

export const Page: NextPage = () => (
  <CSR>
    <CheatSheet />
  </CSR>
);
