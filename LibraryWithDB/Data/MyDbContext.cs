using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using LibraryWithDB.Models;

namespace LibraryWithDB.Data
{
    public class MyDbContext:DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options): base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
        public DbSet<BookIssue> BookIssues { get; set; }
    }
}
