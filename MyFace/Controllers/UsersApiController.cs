using Microsoft.AspNetCore.Mvc;
using MyFace.Models.api;
using MyFace.Repositories;

namespace MyFace.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersApiController : ControllerBase
    {
        private readonly IUsersRepo _users;

        public UsersApiController(IUsersRepo users)
        {
            _users = users;
        }

        [Route("{id}")]
        public ActionResult<UserApiModel> GetUser(int id)
        {
            var user = _users.GetById(id);
            return new UserApiModel(user);
        }
    }
}