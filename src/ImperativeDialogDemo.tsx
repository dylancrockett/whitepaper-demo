import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react"


export const ImperativeDialogDemo = () => {
    const [dailogOpen, setDialogOpen] = useState(false);

    const doSomething = () => {};

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);
    const doAction = () => {
        doSomething()
        closeDialog();
    };

    return (
        <div id="demo-box">
            <div>{"To perform your action click the button below and confirm."}</div>
            <Button onClick={openDialog}>{"Do Action"}</Button>

            <Dialog open={dailogOpen}>
                <DialogActions>
                    <DialogContent>{"Are you sure you would like to do an action?"}</DialogContent>
                    <Button onClick={doAction}>{"Confirm"}</Button>
                    <Button onClick={closeDialog}>{"Cancel"}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}