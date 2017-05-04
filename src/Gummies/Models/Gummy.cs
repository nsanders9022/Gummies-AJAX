using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gummies.Models
{
    [Table("Gummies")]
    public class Gummy
    {
        [Key]
        public int GummyId { get; set; }
        public string Name { get; set; }
        public string Cost { get; set; }
        public string Country { get; set; }
        public string Image { get; set; }

        public Gummy(string name, string cost, string country, string image, int id=0)
        {
            Name = name;
            Cost = cost;
            Country = country;
            Image = image;
            GummyId = id;
        }
        public Gummy() { }
    }

    
}
