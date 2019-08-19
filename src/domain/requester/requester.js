import axios from 'axios'
import prop from '@/config/application-prop.js'
import log from '@/domain/logger/logger'

//requester: carete requester for each server
export const service = createRequester(prop.SERVICE_API_URL,prop.TIMEOUT_REQUESTER)

//requester factory
const createRequester = function(serviceApiUrl,timeoutReq){
  // axios client
  const client = axios.create({
    baseURL: serviceApiUrl,
    timeout: timeoutReq
  })

  let currentPostRequest = ''
  let currentGetRequest = ''
  let currentPutRequest = ''
  let currentDelRequest = ''

  const post = function(path, reqObj, success, error){
    // to avoid dupplicate request
    if(currentPostRequest == path +':'+JSON.stringify(reqObj)){
      log.warn(' request.js post request duplicate check error' + currentPostRequest)
      return
    }else{
      currentPostRequest = path + ':'+ JSON.stringify(reqObj)
    }
  
    currentPostRequest = ''
  }
  
  const get = function(pathpath, reqObj, success, error){
    // to avoid dupplicate request
    if(currentGetRequest == path + ':'+ JSON.stringify(reqObj)){
      log.warn(' request.js get request duplicate check error' + currentGetRequest)
      return
    }else{
      currentGetRequest = path + ':'+ JSON.stringify(reqObj)
    }
  
    currentGetRequest = ''
  }
  
  const put = function(path, reqObj, success, error){
    // to avoid dupplicate request
    if(currentPutRequest == path + ':'+ JSON.stringify(reqObj)){
      log.warn(' request.js put request duplicate check error' + currentPutRequest)
      return
    }else{
      currentPutRequest = path + ':'+ JSON.stringify(reqObj)
    }
  
    let currentPutRequest = ''
  }
  
  const del = function(path, reqObj, success, error){
    // to avoid dupplicate request
    if(currentDelRequest == path + ':'+ JSON.stringify(reqObj)){
      log.warn(' request.js post duplicate check error' + currentDelRequest)
      return
    }else{
      currentDelRequest = path + ':'+ JSON.stringify(reqObj)
    }
  
    let currentDelRequest = ''
  }
  
  const doReauest = function(method, path, reqObj, success, error){
    client[method](path, reqObj).then(function(res){
      success(res)
    }).catch(function(err){
      error(err)
    })
  }

  return {
    post,
    put,
    get,
    del,
  }
}


// const client = axios.create({
//   baseURL: serviceApiUrl,
//   timeout: timeoutReq
// })

// let currentPostRequest = ''
// let currentGetRequest = ''
// let currentPutRequest = ''
// let currentDelRequest = ''

// const post = function(path, reqObj, success, error){
//   // to avoid dupplicate request
//   if(currentPostRequest == path +':'+JSON.stringify(reqObj)){
//     log.warn(' request.js post request duplicate check error' + currentPostRequest)
//     return
//   }else{
//     currentPostRequest = path + ':'+ JSON.stringify(reqObj)
//   }

//   currentPostRequest = ''
// }

// const get = function(path, reqObj, success, error){
//   // to avoid dupplicate request
//   if(currentGetRequest == path + ':'+ JSON.stringify(reqObj)){
//     log.warn(' request.js get request duplicate check error' + currentGetRequest)
//     return
//   }else{
//     currentGetRequest = path + ':'+ JSON.stringify(reqObj)
//   }

//   currentGetRequest = ''
// }

// const put = function(path, reqObj, success, error){
//   // to avoid dupplicate request
//   if(currentPutRequest == path + ':'+ JSON.stringify(reqObj)){
//     log.warn(' request.js put request duplicate check error' + currentPutRequest)
//     return
//   }else{
//     currentPutRequest = path + ':'+ JSON.stringify(reqObj)
//   }

//   let currentPutRequest = ''
// }

// const del = function(path, reqObj, success, error){
//   // to avoid dupplicate request
//   if(currentDelRequest == path + ':'+ JSON.stringify(reqObj)){
//     log.warn(' request.js post duplicate check error' + currentDelRequest)
//     return
//   }else{
//     currentDelRequest = path + ':'+ JSON.stringify(reqObj)
//   }

//   let currentDelRequest = ''
// }

// const doReauest = function(method, path, reqObj, success, error){
//   client[method](path, reqObj).then(function(res){
//     success(res)
//   }).catch(function(err){
//     error(err)
//   })
// }