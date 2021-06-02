using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactForm.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public string Telefoni { get; set; }
    }
}
