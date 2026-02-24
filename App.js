function login(user) {
 if (user.role === "admin") {
  return "Admin Panel";
 }
 return "Access Denied";
}

module.exports = login;