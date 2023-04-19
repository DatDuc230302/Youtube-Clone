export const menuShow = (state: any = true, action: any) => {
    switch (action.type) {
        case 0:
            return (state = true);
        case 1:
            return (state = false);
        default:
            return state;
    }
};

export default menuShow;
