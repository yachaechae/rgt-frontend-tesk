import React from 'react'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
    }
    console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error('[Request Error]', error)
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('[Response]', response)
    return response
  },
  (error) => {
    console.error('[Response Error]', error.response || error)
    return Promise.reject(error)
  },
)

export default axiosInstance
