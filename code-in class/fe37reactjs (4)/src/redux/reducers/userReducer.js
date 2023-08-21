import { switchCase } from "@babel/types"

let initialState  = {
    userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyword: ""
}
const userReducer = (state = initialState, action) =>{
    
    switch  (action.type) {
        case "DELETE":
            console.log(action);
            return {... state};
            
        default:
           return {...state}
    }
}