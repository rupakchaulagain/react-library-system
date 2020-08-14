export default (state = {
    categoryList: []
}, action) => {

    let categoryList = [...state.categoryList]
    switch (action.type) {

        case 'ASSIGN_BOOK':
            categoryList.push(action.payload)
            state = {
                categoryList
            }
            return state

        default:
            return state

    }

}