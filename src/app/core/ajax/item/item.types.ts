export const ITEM_TYPES = {
  INFO: 'info',
  LOGGED_OUT: 'logged-out',  // TODO: Move this up to core - not really item specific
  TOKEN: 'user_token',
  USER: 'user',
};

// TODO: is there a way to improve this?
export type ItemType = string;

export interface IItem {
  error: any;
  item: any;
  itemType: ItemType;
  loading: boolean;
}
