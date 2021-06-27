var user = "22";

switch (user) {
    case "admin":
        console.log("full acess");
        break;
        case "subAdmin":
            console.log("full acess to add/del content");
            break;
            case "TestPrep":
                console.log("full acess to add/del course");
                break;
                case "user":
                    console.log(" acess to take test");
                    break;
    default:
        console.log("Trail user");
        break;
}