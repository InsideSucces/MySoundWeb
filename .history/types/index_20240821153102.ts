import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type ArtistData = {
  id: number;
  name: string;
  image: string;
  genre: string;
  bio: string;
};
