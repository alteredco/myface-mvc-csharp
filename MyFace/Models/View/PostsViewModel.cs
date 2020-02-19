using System.Collections.Generic;
using System.Linq;
using MyFace.Models.Database;

namespace MyFace.Models.View
{
    public class PostsViewModel
    {
        public PostsViewModel(IEnumerable<Post> posts)
        {
            Posts = posts.Select(post => new PostViewModel(post));
        }

        public IEnumerable<PostViewModel> Posts { get; }
    }
}