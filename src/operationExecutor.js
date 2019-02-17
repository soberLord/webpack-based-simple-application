'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    let func = function(arg) {
      let clone = {};
      for (let prop in arg) {
        if (arg.hasOwnProperty(prop)) {
          if ("object" === typeof arg[prop]) {
            clone[prop] = func(arg[prop]);
          } else
            clone[prop] = arg[prop];
        }
      }
      return clone;
    };
    let clone = func(arg);

    clone.obj1.firstName = "Vladislav";
    clone.obj1.lastName = "Erofeev";
    clone.obj1.relatives[0].firstName = "Vladislav";
    clone.obj1.relatives[0].lastName = "Erofeev";
    console.info(arg);
    return clone;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    let func = function(arg) {
      let clone = {};
      for (let prop in arg) {
        if (arg.hasOwnProperty(prop)) {
          if ("object" === typeof arg[prop]) {
            clone[prop] = func(arg[prop]);
          } else
            clone[prop] = arg[prop];
        }
      }
      return clone;
    };
    let clone = func(arg);
    clone.obj1.b = 100;
    clone.obj2.c = 300;
    console.info(arg);
    return clone /* variable with result */;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    let array = arg.obj1.relatives;
    array.forEach(element => {
      if (element.lastName === "Ivanova") {
        element.gender = "female";
      } else {
        element.gender = "male";
      }
    });
    return arg;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    let array = arg.obj1.relatives;
    let arrayWelcome = [];
    let i = 0;
    array.forEach(element => {
      arrayWelcome[i] = `Здравствуйте ${element.firstName} ${element.lastName} !!!`;
      i++;
    });
    return arrayWelcome;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    let classname = document.getElementsByClassName(arg.className);
    classname.item(0).setAttribute("color", arg.color);
    console.info(classname);
    return classname.item(0).getAttribute("color");
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    console.info(arg.hostNames);
    let names = arg.hostNames;
    let copy = {};
    let hostNames = [];
    let i = 0;
    console.info(names);
    names.forEach(name => {
      console.info(name);
      if (name === window.location.hostname) {
        hostNames[i] = name;
        ++i;
      }
    });
    copy.hostNames = hostNames;
    return copy;
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    let keys = Object.keys(arg);
    let array = {};
    for (let i=0;i<keys.length; i++) {
      let el = arg[keys[i]];
      array[el] = keys[i];
    }
    console.info(arg);
    return array;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    /**
     * Place your code here
     */
    return null;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    /**
     * Place your code here
     */
    return null;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    /**
     * Place your code here
     */
    return null;
  }
}

export default OperationExecutor;
