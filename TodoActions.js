const activeList = (active) => ({
  type: "ACTIVE",
  payload: active,
});
const doneList = (done) => ({
  type: "DONE",
  payload: done,
});
const allList = (all) => ({
  type: "ALL",
  payload: all,
});

export { activeList, doneList, allList };
