import { Button, Dialog, DialogContent, DialogActions } from "@mui/material";
import { useDialog } from "./useDialog";

const doSomething = () => {};

export const DeclarativeDialogDemo = () => {
    const [dialog, confirm] = useDialog<boolean>(close => (
        <Dialog open>
            <DialogActions>
                <DialogContent>{"Are you sure you would like to do an action?"}</DialogContent>
                <Button onClick={() => close(true)}>{"Confirm"}</Button>
                <Button onClick={() => close(false)}>{"Cancel"}</Button>
            </DialogActions>
        </Dialog>
    ));

    const doAction = async () => {
        if (await confirm()) doSomething();
    };

    return (
        <div id="demo-box">
            <div>{"To perform your action click the button below and confirm."}</div>
            <Button onClick={doAction}>{"Do Action"}</Button>

            {dialog}
        </div>
    );
};