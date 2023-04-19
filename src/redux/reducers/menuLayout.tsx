export const menuLayout = (state: any = false, action: any) => {
    switch (action.type) {
        case 5:
            return (state = true);
        case 6:
            return (state = false);
        default:
            return state;
    }
};

export default menuLayout;
