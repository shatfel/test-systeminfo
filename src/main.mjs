/**
 * main
 */

// config
import * as si from 'systeminformation'
import {_C} from '../etc/config.mjs'
// libs
import * as libCommon from './lib/libCommon.mjs'


/**
 * getDeviceInfo()
 * @name "getDeviceInfo"
 */
async function getDeviceInfo() {
  await libCommon.pP('Device Information')

  // cpu
  await si.cpu().then(data => {
    libCommon.pI('CPU Info')
    libCommon.pP('Manufacturer: ' + data.manufacturer)
    libCommon.pP('Brand: ' + data.brand)
    libCommon.pP('Speed: ' + data.speed)
    libCommon.pP('Cores: ' + data.cores)
    libCommon.pP('PhysCores: ' + data.physicalCores)
    libCommon.pP('Virtualiztion: ' + data.virtualization)
    libCommon.pP('Voltage: ' + data.voltage)
    }).catch(error => libCommon.pE(error))

  // memory
  await si.mem().then(data => {
    libCommon.pI('Menmory info')
    libCommon.pP('Total: ' + data.total/1024/1024 + "M")
    libCommon.pP('Used: ' + data.used/1024/1024 + "M")
    libCommon.pP('Free: ' + data.free/1024/1024 + "M")
    libCommon.pP('Cached: ' + data.cached/1024/1024 + "M")
    libCommon.pP('Swap total: ' + data.swaptotal/1024/1024 + "M")
    libCommon.pP('Swap free: ' + data.swapfree/1024/1024 + "M")
    }).catch(error => libCommon.pE(error))

  // loads
  await si.currentLoad().then(data => {
    libCommon.pP("CPUs: ")
    data.cpus.forEach(element => {
      libCommon.pP(element.loadSystem)
    });
  })
  }

 

getDeviceInfo()