declare const json: Deprecated;
export default json;

/**
 * An ordered list of old tags mapped to new tags.
 */
export type Deprecated = {
  old: {
    [k: string]: string;
  };
  replace?: {
    [k: string]: string;
  };
}[];
