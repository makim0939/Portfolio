import { atom } from "jotai";
import GridAnimation from "./grid";
export const prevPageAtom = atom(0);
export const headerModeAtom = atom("default");
export const headerUnderLineAtom = atom(0);
export const gridAnimationRequestAtom = atom<"none" | "scroll" | "up" | "down" | "left" | "right" | null>(
  null
);
