using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginRegisterSessions.Models
{
    //public System.DateTime booking_date { get; set; }
    //public string car_model { get; set; }
    //public string car_make { get; set; }
    //public string car_colour { get; set; }
    //public string user_email { get; set; }
    //public string user_name { get; set; }

    public partial class BookingDBEntities
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "A Date is Required")]
        [DataType(DataType.Date)]
        public string Booking_date { get; set; }

        [Display(Name = "car_model")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "The Model of the Car is needed Eg: Focus")]
        [MinLength(3, ErrorMessage = "A minimum of 3 Characters is needed")]
        public string car_model { get; set; }

        [Display(Name = "car_make")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "The Make of the Car is Required Eg: Ford")]
        [MinLength(3, ErrorMessage = "A minimum of 3 Characters is needed")]
        public string car_make { get; set; }

        [Display(Name = "car_colour")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "The Colour of the Car is Required")]
        [MinLength(3, ErrorMessage = "Minimum of 3 Characters Required")]
        public string car_colour { get; set; }

        [Display(Name = "user_email")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Email is Required")]
        [DataType(DataType.EmailAddress)]
        public string user_email { get; set; }

        [Display(Name = "user_name")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "The Colour of the Car is Required")]
        [MinLength(3, ErrorMessage = "Minimum of 3 Characters Required")]
        public string user_name { get; set; }



    }
}