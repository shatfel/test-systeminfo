/**
 * common lib
 */

//config
import {_C} from '../../etc/config.mjs'

//
import chalk from 'chalk'

/**
 * pP()
 * @param {String} msg 
 * @param {String} msgType 
 */
function pP(msg, msgType='') {
  switch (msgType) {
    case 'e':
      console.log(chalk.bold.red('/e/ %s'), msg)
      break;

    case 'w':
      console.log(chalk.cyan('/w/ %s'), msg)
      break;
     
    case 'i':
      console.log(chalk.magenta('/i/ %s'), msg)
      break;

    case 'd':
      console.log(chalk.grey('/d/ %s'), msg)
      break;
  
    default:
      console.log(chalk.bold.white(msg))
      break;
  }
}

/**
 * pE() print error
 * @param {String} msg
 */
function pE(msg) {
  this.pP(msg, 'e')
}


/**
 * pI() print info
 * @param {String} msg
 */
function pI(msg) {
  this.pP(msg, 'i')
}


/**
 * pW() print warning
 * @param {String} msg
 */
function pW (msg) {
  this.pP(msg, 'w')
}

/**
 * pD() print error
 * @param {String} msg
 */
function pD(msg) {
  this.pP(msg, 'd')
}


export {
  pP,
  pD,
  pE,
  pW,
  pI
}