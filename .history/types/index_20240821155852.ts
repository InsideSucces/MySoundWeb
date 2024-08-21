import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type ArtistData = {
  id: number;
  name: string;
  bio: string;
  image: string;
};
export type Data = {
  id: number;
  name: string;
  bio: string;
  image: string;
};