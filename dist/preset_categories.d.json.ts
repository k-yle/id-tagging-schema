declare const json: PresetCategories;
export default json;

export type PresetCategories = {
  [id: string]: PresetCategory;
};

/**
 * An ordered grouping of presets
 */
export interface PresetCategory {
  /**
   * The title of this category in US English
   */
  name?: string;
  /**
   * Name of preset icon which represents this preset
   */
  icon?: string;
  /**
   * The IDs of the presets in this category
   *
   * @minItems 1
   */
  members?: [string, ...string[]];
}
