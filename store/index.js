export const state=()=>({
    picPassword:''
})
export const mutations={
    updatePicPassword(state,payload){
        state.picPassword=payload.password
    }
}