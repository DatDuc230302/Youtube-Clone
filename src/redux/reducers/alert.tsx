export const alert = (state: any = false, action: any) => {
    switch (action.type) {
        case true:
            return (state = true);
        case false:
            return (state = false);
        default:
            return state;
    }
};

export default alert;
