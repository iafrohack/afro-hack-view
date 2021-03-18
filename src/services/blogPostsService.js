
import ApiRequestsService from '@/services/apiRequestsService';

export default class BlogPostsService {

  static async getAllBlogPosts(blogsComponent) {
    blogsComponent.loading = true;
    const apiEndPoint = 'posts';

    const { resultsPerPage, currentPage } = blogsComponent.pagination;

    const params = {
      limit: resultsPerPage,
      offset: BlogPostsService.getOffset(blogsComponent),
    };

    const blogPosts = await ApiRequestsService.fetchRecords(blogsComponent, apiEndPoint, params);

    blogsComponent.blogPosts = [...blogsComponent.blogPosts, ...blogPosts];

    blogsComponent.pagination = {
      ...blogsComponent.pagination,
      currentPage: currentPage + 1,
    };
    blogsComponent.loading = false;
    return blogPosts;
  }

  static async getBlogPost(postViewerComponent, blogPostId) {
    const apiEndPoint = `posts/${blogPostId}`;

    const blogPost = await ApiRequestsService.fetchRecords(postViewerComponent, apiEndPoint);

    postViewerComponent.blogPost = blogPost;

    return blogPost;
  }

  static getOffset(blogsComponent) {
    const { resultsPerPage, currentPage } = blogsComponent.pagination;

    return (currentPage - 1) * resultsPerPage;
  }


}
