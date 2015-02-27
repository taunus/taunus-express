# 3.0.0 Randy Marsh

- Removed unnecessarily complex `res.redirect` hijacking. Refer to `taunus.redirect` instead

# 2.1.0 Full Stack Ranger

- Fixed an issue that caused `res.redirect` to throw `RangeError: Maximum call stack size exceeded`

# 2.0.0 Convenience Store

- `res.redirect` translates into `taunus.redirect` on Taunus view routes
