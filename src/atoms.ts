import { atom } from "jotai";
import GridAnimation from "./grid";
export const prevPageAtom = atom(0);
export const gridAppAtom = atom<GridAnimation | null>(null);
