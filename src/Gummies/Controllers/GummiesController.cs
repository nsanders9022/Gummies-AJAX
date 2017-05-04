using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Gummies.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Gummies.Controllers
{
    public class GummiesController : Controller
    {
        private GummiesContext db = new GummiesContext();
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(db.Gummies.ToList());
        }

        //public IActionResult Details(int id)
        //{
        //    var thisGummy = db.Gummies.FirstOrDefault(gummies => gummies.GummyId == id);
        //    return View(thisGummy);
        //}

        public IActionResult Details(int id)
        {
            var thisGummy = db.Gummies.FirstOrDefault(gummies => gummies.GummyId == id);
            return View(thisGummy);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create (string newName, string newCost, string newCountry, string newImage)
        {
            Gummy newGummy = new Gummy(newName, newCost, newCountry, newImage);
            db.Gummies.Add(newGummy);
            db.SaveChanges();
            return Json(newGummy);
        }

        public IActionResult Edit(int id)
        {
            var thisGummy = db.Gummies.FirstOrDefault(gummies => gummies.GummyId == id);
            return View(thisGummy);
        }

        [HttpPost]
        public IActionResult Edit(string newName, string newCost, string newCountry, string newImage, int id)
        {
            var thisGummy = db.Gummies.FirstOrDefault(gummies => gummies.GummyId == id);
            thisGummy.Name = newName;
            thisGummy.Cost = newCost;
            thisGummy.Country = newCountry;
            thisGummy.Image = newImage;
            db.Entry(thisGummy).State = EntityState.Modified;
            db.SaveChanges();
            return Json(thisGummy);
        }

        public IActionResult Delete(int id)
        {
            var thisGummy = db.Gummies.FirstOrDefault(gummies => gummies.GummyId == id);
            return View(thisGummy);
        }

        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirmed(int id)
        {
            var thisGummy = db.Gummies.FirstOrDefault(gummies => gummies.GummyId == id);
            db.Gummies.Remove(thisGummy);
            db.SaveChanges();
            return Json(thisGummy);
        }

        public IActionResult GummyList()
        {
            return View(db.Gummies.ToList());
        }
    }
}
