export const menuFade = (state: any = false, action: any) => {
    switch (action.type) {
        case 3:
            return (state = true);
        case 4:
            return (state = false);
        default:
            return state;
    }
};

export default menuFade;
