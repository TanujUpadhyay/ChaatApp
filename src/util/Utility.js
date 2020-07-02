export default class Utility {
  static isvALIDfIELD = (term) => {
    let length = term.trim().length;
    return length > 0 ? true : false;
  };
  static isEmailVaild = (term) => {
    const expression =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    let isValid = expression.test(String(term).toLowerCase());
    return;
  };
}
