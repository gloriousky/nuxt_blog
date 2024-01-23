/* eslint-disable no-undef */
export const useArticleStore = defineStore("article-store", {
  state: () => ({
    articles: [],
  }),
  actions: {
    async getArticlesInfo() {
      /**FIXME:  data為ref or reactive object，無法在頁面存取修改 */
      const { data } = await useFetch("/api/articles");
      this.articles = data;
      return data;
    },
  },
});
