'use strict'

class HomeController {
  async index({
    request,
    response,
    view
  }) {
    return view.render('admin.home.index')
  }
}

module.exports = HomeController
