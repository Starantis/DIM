import { createAction } from 'typesafe-actions';
import { WishListAndInfo } from './types';

export const loadWishLists = createAction('wishlists/LOAD')<{
  wishList: WishListAndInfo;
  // Defaults to "now" but can be set if we're loading from IndexedDB
  lastFetched?: Date;
}>();

export const clearWishLists = createAction('wishlists/CLEAR')();
