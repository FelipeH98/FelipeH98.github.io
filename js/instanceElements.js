document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    var el = document.querySelectorAll('.tabs')
    var instance = M.Tabs.init(el);
});

