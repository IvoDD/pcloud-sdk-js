/* @flow */

import type { ApiMethodOptions } from "../api/types";

export type Item = { name: string, isfolder: boolean, id: string };

export type Folder = {
  id: string,
  name: string,
  isfolder: true,
  folderid: number
};

export type File = {
  id: string,
  name: string,
  isfolder: boolean,
  fileid: number
};

export type FileLocal = { name: string, path: string, size: number };

export type ClientType = "oauth" | "pcloud";

export type ClientApiMethodOptions =
  & ApiMethodOptions
  & { cache?: boolean, cacheTime?: number };

export type ApiClient = {
  api(method: string, params: ApiMethodOptions): Promise<any>,
  getfilelink(): Promise<string>,
  download(): void
};

export type MethodApi = {
  client: ApiClient,
  setToken(token: string): void,
  type: string
};

export type ClientMethod = (T: MethodApi) => () => Promise<*>;