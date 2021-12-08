import * as Types from './types';

export const runAction = (action) => {
  return { type: Types.RUN_ACTION, payload: action }
}
