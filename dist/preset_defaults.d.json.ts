declare const json: PresetDefaults;
export default json;

/**
 * Directory of the IDs of the presets or categories to be shown in the default list for each geometry type.
 */
export interface PresetDefaults {
  point?: string[];
  vertex?: string[];
  line?: string[];
  area?: string[];
  relation?: string[];
}
