using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using LibraryWithDB.Data;
using LibraryWithDB.Models;

namespace LibraryWithDB.Controllers
{
    [Route("/api/Books")]
    public class BookController : Controller
    {
        private MyDbContext _context = null;

        public BookController(MyDbContext context)
        {
            this._context = context;
        }

        [HttpGet]

        public async Task<IEnumerable<Book>> GetBooks()
        {
            var book = await _context.Books.ToListAsync();
            return (book);
        }


        [HttpGet("{id}")]

        public async Task<IActionResult> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }


        [HttpPost]
        
        public async Task<IActionResult> AddBook([FromBody] Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            //return View(book);
            return Json(book);
        }


        [HttpPut("{id}")]

        public async Task<IActionResult> UpdateBook( [FromBody] Book book, int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bk = await _context.Books.FindAsync(id);
            
            if (bk != null)
            {
                bk.Title = book.Title;
                bk.Edition = book.Edition;
                bk.Publisher = book.Publisher;
                bk.Isbn = book.Isbn;
            }

            // More work to be done here

            await _context.SaveChangesAsync();
            return Json(bk);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainee(int? id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return Ok(id);
        }

    }
}
