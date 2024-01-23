/* eslint-disable no-undef */
export default defineEventHandler((event) => {
  return {
    code: 1,
    data: {
      url: event.path,
    },
    message: "路由沒匹配到",
  };
});
