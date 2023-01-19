// p.021
// mongoose의 싱글톤 패턴

Mongoose.prototype.connect = function (url, options, callback) {
  const _mongoose = this instanceof Mongoose ? this : mongoose;
  const conn = _mongoose.connection;

  return _mongoose._promiseOrCallback(callback, (cb) => {
    conn.openUri(uri, options, (err) => {
      if (err != null) return cb(err);

      return cb(null, _mongoose);
    });
  });
};
