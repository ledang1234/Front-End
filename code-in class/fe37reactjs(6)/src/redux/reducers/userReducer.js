import * as ACtionType from  "./../constant/ActionType"

let initialState = {
  userList: [
    {
      id: 1,
      name: "Dang Gia Le",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    },
    {
      id: 2,
      name: "Dang Minh Tri",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    }
  ],
  userEdit: null,
  keyword: ""
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACtionType.DELETE:
      let index = state.userList.findIndex(item => {
        return item.id === action.user.id;
      });
      if (index !== -1) {
        let userList = [...state.userList];
        userList.splice(index, 1);
        state.userList = userList
      }
      return { ...state};
      
    case "SUBMIT":
      console.log(action);

      if (action.user.id){
        //UDDATE
        let index =  state.userList.findIndex(item  =>  {
          return item.id === action.user.id
        })
        if (index !== -1){
          let userListUpdate = [...state.userList];
          userListUpdate[index] = action.user;
          state.userList = userListUpdate;
        }
      }else{
        //ADD
        let userAdd = {...action.user, id: Math.random()}
        state.userList =  [...state.userList, userAdd];
        
      }
      return { ...state };

    case ACtionType.EDIT:
      state.userEdit = action.user;
      return { ...state };

    case "SEARCH":
      state.keyword = action.keyword
      return { ...state };


    default:
      return { ...state }
  }
}

export default userReducer;
