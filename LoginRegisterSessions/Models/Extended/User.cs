using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace LoginRegisterSessions.Models
{
    [MetadataType(typeof(UserMetaData))]
    public partial class User
    {
        public string ConfirmPassword { get; set; }
    }
    public class UserMetaData
    {
        [Display(Name = "Firstname")]
        [Required(AllowEmptyStrings = false, ErrorMessage="Firstname is Required")]
        [MinLength(3, ErrorMessage = "Minimum of 3 Characters Required")]
        public string Firstname { get; set; }

        [Display(Name ="Surname")]
        [Required(AllowEmptyStrings =false, ErrorMessage ="Lastname is Required")]
        [MinLength(3, ErrorMessage = "Minimum of 3 Characters Required")]
        public string Surname { get; set; }

        [Display(Name = "Email")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Email is Required")]
        [DataType(DataType.EmailAddress)]
        public string Email{ get; set; }


        [Required(AllowEmptyStrings = false, ErrorMessage = "Password is Required")]
        [DataType(DataType.Password)]
        [MinLength(6, ErrorMessage ="Minimum of 6 Characters Required")]
        public string Password{ get; set; }

        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage ="Passwords Do not Match")]
        [MinLength(6, ErrorMessage = "Minimum of 6 Characters Required")]
        public string ConfirmPassword { get; set; }


    }
}