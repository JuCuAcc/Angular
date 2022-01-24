using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using LibraryWithDB.Data;
using LibraryWithDB.Models;
using Microsoft.EntityFrameworkCore;


namespace LibraryWithDB.Controllers
{
    [Route("/api/bookIssues")]
    public class BookIssueController : Controller
    {

        private readonly MyDbContext context = null;

        public BookIssueController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<BookIssue>> GetBookIssues()
        {
            var bks = await context.BookIssues.ToListAsync();
            return bks;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookIssue(int id)
        {
            var bookIssue = await context.BookIssues.FindAsync(id);
            if (bookIssue == null)
            {
                return NotFound();
            }
            return Ok(bookIssue);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBookIssue([FromBody] BookIssue bookIssue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.BookIssues.Add(bookIssue);
            await context.SaveChangesAsync();
            return Json(bookIssue);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBookIssue([FromBody] BookIssue bookIssue, int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var bks = await context.BookIssues.FindAsync(id);
            if (bks != null)
            {
                bks.IssueDate = bookIssue.IssueDate;
                bks.Registered = bookIssue.Registered;
                bks.MemberName = bookIssue.MemberName;
                bks.ImagePath = bookIssue.ImagePath;
                bks.Id = bookIssue.Id;

            }
            await context.SaveChangesAsync();
            return Ok(bks);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookIssue(int id)
        {
            var bookIssue = await context.BookIssues.FindAsync(id);
            if (bookIssue == null)
            {
                return NotFound();
            }
            context.Remove(bookIssue);
            await context.SaveChangesAsync();
            return Ok(id);
        }

        [HttpGet]
        [Route("GetBookList")]
        public IEnumerable<Book> GetBooks()
        {
            List<Book> lstBook= new List<Book>();
            lstBook = (from BookList in context.Books 
                       select BookList).ToList();
            return lstBook;
        }
    }
}
