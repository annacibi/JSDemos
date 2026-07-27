let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full acess granted";
} else if (useRole === "manager") {
    accessLevel = "Limited acess granted";
} else {
    acessLevel = "No acess granted"
}

console.log("Access Level:", accessLevel);