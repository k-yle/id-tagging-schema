declare const json: Presets;
export default json;

export type Presets = {
  [id: string]: Preset;
};

/**
 * Associates an icon, form fields, and other UI with a set of OSM tags
 */
export interface Preset {
  /**
   * The English name for the feature. A preset can reference the label of another by using that preset's identifier contained in brackets (e.g. {preset}), in which case also the preset's aliases and terms will also be referenced from that preset.
   */
  name: string;
  /**
   * Valid geometry types for the feature, in order of preference
   *
   * @minItems 1
   */
  geometry: [
    "point" | "vertex" | "line" | "area" | "relation",
    ...("point" | "vertex" | "line" | "area" | "relation")[]
  ];
  /**
   * Tags that must be present for the preset to match
   */
  tags: {
    [k: string]: string;
  };
  /**
   * Tags that are added when changing to the preset (default is the same value as 'tags')
   */
  addTags?: {
    [k: string]: string;
  };
  /**
   * Tags that are removed when changing to another preset (default is the same value as 'addTags' which in turn defaults to 'tags')
   */
  removeTags?: {
    [k: string]: string;
  };
  /**
   * Default form fields that are displayed for the preset. A preset can reference the fields of another by using that preset's identifier contained in brackets, like {preset}.
   */
  fields?: string[];
  /**
   * Additional form fields that can be attached with the 'Add field' dropdown. A preset can reference the "moreFields" of another by using that preset's identifier contained in brackets, like {preset}.
   */
  moreFields?: string[];
  /**
   * Name of preset icon which represents this preset
   */
  icon?: string;
  /**
   * The URL of a remote image that is more specific than 'icon'
   */
  imageURL?: string;
  /**
   * English search terms or related keywords
   */
  terms?: string[];
  /**
   * Display-ready English synonyms for the `name`
   */
  aliases?: string[];
  /**
   * Whether or not the preset will be suggested via search
   */
  searchable?: boolean;
  /**
   * The quality score this preset will receive when being compared with other matches (higher is better)
   */
  matchScore?: number;
  /**
   * Taginfo documentation parameters (to be used when a preset manages multiple tags)
   */
  reference?: {
    /**
     * For documentation of a key
     */
    key: string;
    /**
     * For documentation of a tag (key and value)
     */
    value?: string;
  };
  /**
   * The ID of a preset that is preferable to this one
   */
  replacement?: string;
  /**
   * An object specifying the IDs of regions where this preset is or isn't valid. See: https://github.com/ideditor/location-conflation
   */
  locationSet?: {
    include?: string[];
    exclude?: string[];
  };
  relation?: RelationSchema;
  /**
   * A preset can reference the relation schema from another preset
   */
  relationCrossReference?: string;
}
export interface RelationSchema {
  /**
   * Only useful for specifying placeholders which are referenced in members.*.matchTags
   */
  optionalTags?: {
    [k: string]: string;
  };
  allowDuplicateMembers: boolean;
  members: {
    /**
     * Map of roles to their label in the default language. An empty string is allowed as key.
     */
    roles?: {
      [k: string]: string;
    };
    /**
     * If not specified, any geometry is allowed
     */
    geometry?: ("point" | "vertex" | "line" | "area" | "relation")[];
    /**
     * `*` can be used as a tag value. If multiple array items are specified, only 1 needs to match.
     */
    matchTags: {
      [k: string]: string;
    }[];
    /**
     * If unspecified, there is no minimum
     */
    min?: number;
    /**
     * If unspecified, there is no maximum
     */
    max?: number;
  }[];
}
