import * as config from '@/config/application-prop.js'

const DEBUG_MODE = config.LOGGER_DEBUG_MODE

export default {
  logJSON: function (msg) {
    if (DEBUG_MODE) {
      console.log(JSON.stringify(msg))
    }
  },
  // error : it measn that you need to investigat the cause and fix it
  error: function (msg) {
    if (DEBUG_MODE) {
      console.error('error:' + msg)
    }
  },
  // warn: it means that you need to confirm the cause but need not fix it
  warn: function (msg) {
    if (DEBUG_MODE) {
      console.warn('warn :' + msg)
    }
  },
  // info: just information
  info: function (msg) {
    if (DEBUG_MODE) {
      console.info('info :' + msg)
    }
  },
  // debug: it is only for your development
  trace: function (msg) {
    if (DEBUG_MODE) {
      console.trace('debug:' + msg)
    }
  },
  // dump :dump object
  dump: function (obj) {
    console.log('dump :-- start --')
    for (var key in obj) {
      console.log(key + ':' + obj[key])
    }
    console.log('dump :--- end ---')
  }
}
