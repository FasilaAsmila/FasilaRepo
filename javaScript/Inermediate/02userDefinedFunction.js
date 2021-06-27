function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return ` ${name} full acess`;
            break;
            case "subAdmin":
                return `${name}full acess to add/del content`;
                break;
                case "TestPrep":
                    return `${name}full acess to add/del course`;
                    break;
                    case "user":
                        return ` ${name} acess to take test`;
                        break;
        default:
            return `${name} Trail user`;
            break;
        
    }
}

console.log( getUserRole("fasila", "user"));

var getRole = getUserRole("fasila", "admin");

console.log(getRole);