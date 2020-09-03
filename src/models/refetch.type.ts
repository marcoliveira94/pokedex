import {AxiosRequestConfig, AxiosPromise} from 'axios';
import {RefetchOptions} from 'axios-hooks';

export type RefetchProps<T> = (
  config?: AxiosRequestConfig | undefined,
  options?: RefetchOptions | undefined,
) => AxiosPromise<T>;
