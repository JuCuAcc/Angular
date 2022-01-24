using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryWithDB.Models
{
    [Table("Books")]
    public class Book
    {
        public int Id { get; set; }

        [Required]
        [StringLength(30)]
        public string Title { get; set; }

        [Required]
        [StringLength(10)]
        public string Edition { get; set; }

        [Required]
        [StringLength(255)]
        public string Publisher { get; set; }

        [Required]
        [StringLength(15)]
        public string Isbn { get; set; }

        public virtual ICollection<BookIssue> BookIssues { get; set; }
    }
}
