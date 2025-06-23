// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from './items';
import { ItemCreateParams, ItemUpdateParams, Items } from './items';
import * as RootAPI from './root';
import { Root } from './root';

export class Drive extends APIResource {
  root: RootAPI.Root = new RootAPI.Root(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Drive.Root = Root;
Drive.Items = Items;

export declare namespace Drive {
  export { Root as Root };

  export {
    Items as Items,
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
  };
}
