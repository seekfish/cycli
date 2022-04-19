const axios = require("axios");

axios.interceptors.response.use(res => {
  return res.data;
});

/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get("https://api.github.com/users/seekfish/repos");
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
  // console.log
  // return axios.get(`https://github.com/seekfish/vue3.0-ts/${repo}/tags`);
  return axios.get(`https://api.github.com/repos/seekfish/${repo}/tags`);
}

module.exports = {
  getRepoList,
  getTagList,
};
