// A hash to store our routes:
var routes = {};
// The route registering function:
function route (path, templateId, controller) {
    routes[path] = {templateId: templateId, controller: controller};
}
route('contact', 'template1', function () {
    this.html = 'Hi there!';
});

var el = null;
function router () {
    // Lazy load view element:
    el = el || document.getElementById('view');
    // Current route url (getting rid of '#' in hash as well):
    var url = location.hash.slice(1) || '/';
    // Get route by url:
    var route = routes[url];
    console.log(location.hash);
    // Do we have both a view and a route?
    if (el && route.controller) {
        if(location.hash!=='') {
            el.innerHTML = "";
            el.innerHTML = new route.controller().html;
        }
    }
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);