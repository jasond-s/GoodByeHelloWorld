using System;
using System.Web.Mvc;
using GoodByeHelloWorld.Controllers;
using NUnit.Framework;

namespace GoodByeHelloWorld.Tests
{
    [TestFixture]
    public class HomeControllerTests
    {
        [Test]
        public void Index_Test()
        {
            // Arrange          
            const string expectedViewName = "Index";
            var customersController = new HomeController();

            // Act
            var result = customersController.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result, "Should have returned a ViewResult");
            Assert.AreEqual(expectedViewName, result.ViewName, "View name should have been {0}", expectedViewName);
        }
    }
}
