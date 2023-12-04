﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClothingController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<ClothingModel>> allClothes() 
        { 
            return Ok();
        }
    }
}
