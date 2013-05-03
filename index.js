function toString (val) {
  if (val === undefined || val === null) {
    return ''
  }
  return (val.toString || Object.prototype.toString).call(val)
}

module.exports = toString