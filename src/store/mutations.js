/** 
 * 状态存入（只能同步）
*/

export default {
  stateChange(state, params) {
    state[params.label] = params.value;
  }
};
