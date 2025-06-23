// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DriveAPI from './drive/drive';
import { Drive } from './drive/drive';

export class Me extends APIResource {
  drive: DriveAPI.Drive = new DriveAPI.Drive(this._client);
}

Me.Drive = Drive;

export declare namespace Me {
  export { Drive as Drive };
}
