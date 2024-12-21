import { string } from "prop-types";

export interface colorItem {
  name: string,
  value: string
};

export const colorThemes: colorItem[] = [{
  name: "Navy Blue",
  value: 'bg-[#4E778E]'
}, {
  name: "Aqua",
  value: 'bg-[#597BAB]'
}, {
  name: "Light",
  value: 'bg-[#E8EAEC]'
}, {
  name: "Pearl White",
  value: "bg-[#F3F5F4]",
}, {
  name: "Dark",
  value: 'bg-[#5F6261]'
}];
export const audioTypes = ["Deep Dive Podcast", "Shallow Dive Podcast", "Shallow Dive Narration"];
export const HourTypes = ["1 hour", "2 hour", "4 hour", "8 hour", "12 hour", "24 hour"];
export const playSpeedTypes = ["1.0x", "2.0x", "4.0x", "8.0x"];
export const widgetTypes = ["Coverage Details", "Bias Distribution", "Factuality", "Ownership", "Country"];