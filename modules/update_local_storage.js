export default (obj) => {
  const localdata = JSON.stringify(obj);
  localStorage.setItem('localdata', localdata);
};