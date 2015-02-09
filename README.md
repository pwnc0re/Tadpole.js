### William Betts - william@pwnc0re.com
### A little about me and why I'm making Tadpole.js
Tadpole.js is mainly targeted at PhoneGap applications where a full blown MVC framework might come with too much bloat.

I'm mostly a backend developer, but I do have a decent understanding of the front end. I know javascript pretty well,but not nearly as well as I'd like to so I've decided to take the time and learn some of the newer JS libraries, because I'm building an Android and iOS application using PhoneGap. Before building Tadpole.js I looked around, but couldn't find a view loader that was templating system agnostic. If one already exists (which wouldn't surprise me) then at least I got to learn something new about javascript. 

### Requirements
Basic jQuery is required.

### What is Tadpole.js?
Tadpole.js is a simple library for injecting javascript views on demand. It could careless about what templating system you use or how you use the templating system.

### How does it work?
Tadpole.js maps easy to remember names to the javascript view files. Tadpole.js also injects the view as needed then renders the view for the user to interact with. The javascript view files are setup in a way
that makes them easy for Tadpole.js to interact with below is an example using handlebars.

```

  var view = {
        render: function() {
            var source = $("#menu-tpl").html();
            var template = Handlebars.compile(source);
            $("#main").html(template);
        }
    }
```

### Examples
Tadpole.js requires one option to be set in the constructor and that's the viewMap property. Without
it being set nothing will render correctly. Currently there are two properties to be set viewPath and
viewMap. viewPath is the acutal url path to your javascript views and viewMap is a hashmap that maps
a name for the view to the file name of the view. For exmaple MenuView -> menu_view.js. MenuView is
what you'd refer to in the code and menu_view.js would be the actual file name containing the view information
.

By default Tadpole.js assumes the views will be in the directory /js/Views, but this is easy to change.

---- WARNING ----  The code below hasn't been tested yet. I'm typing this without running it. This is just here to get something up and viewable. This will all be changed when an example site is added ---- WARNING ---


```
var tadpoleViewMap = {};

tadpoleViewMap['SettingsMenuView'] = {
  fileName: 'SettingsMenu.js'
}

tadpoleViewMap['UserInformationView'] = {
  fileName: 'UserInformation.js'
}

var tadpole = new Tadpole({
  viewPath: 'javascript/Views',
  viewMap: tadpoleViewMap
});
```

SettingsMenu.js would look like the following.
```
    var view = {
        render: function() {
            var source = $("#menu-tpl").html();
            var template = Handlebars.compile(source);
            $("#main").html(template);
        }
    }
```

To display the compiled handlebars view you would just call tadpole.injectView('SettingsMenu') where you want it displayed. An example using sammy.js would look like the following.

```

var appRoutes = $.sammy(function() {
  this.route('get', '#/', function() {
    tadpole.injectView('SettingsMenu');
});
```
