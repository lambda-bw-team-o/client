/**
 * Dependencies
 */

import axios from 'axios';

/**
 * Set defaults
 */

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

/**
 * Define helper
 */

const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
}

/**
 * Export helper
 */

export default axiosWithAuth;
