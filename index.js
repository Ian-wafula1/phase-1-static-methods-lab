class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.at(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replaceAll(/[^a-zA-Z0-9\s'-]+/g, '')
  }
  static titleize(str) {
    return Formatter.capitalize(str.split(' ').map(word => {
      let skip = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
      if (skip.includes(word)) return word
      else return Formatter.capitalize(word)
    }).join(' '))
  }
}