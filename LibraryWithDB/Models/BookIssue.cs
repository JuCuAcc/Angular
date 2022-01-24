using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace LibraryWithDB.Models
{
    [Table("BookIssues")]
    public class BookIssue
    {
        [Key]
        public int BookIssueID { get; set; }

        [DataType(DataType.Date)]
        public DateTime IssueDate { get; set; } = new DateTime(2022, 01, 03);

        public bool Registered { get; set; } = false;

        [Required]
        [StringLength(30)]
        public string MemberName { get; set; }

        [Required]
        [StringLength(255)]
        [Display(Name = "Image")]
        public string ImagePath { get; set; } = "/Images/default.png";

        public int Id { get; set; }
        public virtual Book Book { get; set; }
    }
}
