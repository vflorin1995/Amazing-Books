export default () => {
  const localdata = localStorage.getItem('localdata');
  const dataStored = JSON.parse(localdata);
  return dataStored;
};