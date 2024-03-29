/**
 * This file should contains all the factory to build react query keys
 */

/** Exemple */
export const exempleQKey = {
  mainKey: 'exemple',
  list: () => [exempleQKey.mainKey, 'list'],
  detail: (id) => [exempleQKey.mainKey, 'detail', id]
};

/** Geocoging address */
export const addressQKey = {
  mainKey: 'address',
  detail: (address) => [addressQKey.mainKey, 'detail', address]
};
