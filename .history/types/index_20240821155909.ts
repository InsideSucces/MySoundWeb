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
export type PlaylistData = {
  id: number;
  user_id: string;
  bio: string;
  image: string;
};