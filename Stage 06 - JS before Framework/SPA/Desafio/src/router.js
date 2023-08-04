export class Router {
    routes = {};

    add(routeName, page){
        this.routes[routeName] = page;
    }

    route(event){
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);
        this.handle();
        this.toggleNav(event);
    }

    handle(){
        const {pathname} = window.location;
        const route = this.routes[pathname] || this.routes[404];  
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
        })
    }

    toggleNav(event){
        document.querySelectorAll('a').forEach(function (element) {
            element.classList.remove('active')
        });

        event.target.classList.add('active');
    }
}