using System.Web;
using System.Web.Optimization;

namespace GoodByeHelloWorld
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                        "~/Scripts/Vendor/angular.js",
                        "~/Scripts/Vendor/jquery-2.1.1.js"));

            bundles.Add(new ScriptBundle("~/bundles/user").Include(
                        "~/Scripts/App/main.ts",
                        "~/Scripts/App/Services/MainService.js",
                        "~/Scripts/App/Services/MainService.svc.js",
                        "~/Scripts/App/Controllers/MainCtrl.js",
                        "~/Scripts/App/Controllers/MainCtrl.ctrl.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/main.css",
                        "~/Content/bootstrap.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}