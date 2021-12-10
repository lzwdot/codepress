class Router {
  constructor() {
    this.stack = []
  }

  register(path, methods, middleware) {
    let route = {path, methods, middleware}
    this.stack.push(route)
  }

  get(path, middleware) {
    this.register(path, 'get', middleware)
  }
}