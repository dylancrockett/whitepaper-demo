import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react"


export const ComplexImperativeDialogDemo = () => {
    const [firstDailogOpen, setFirstDialogOpen] = useState(false);
    const [secondDailogOpen, setSecondDialogOpen] = useState(false);

    const doSomething = () => {};

    const openFirstDialog = () => setFirstDialogOpen(true);
    const closeFirstDialog = () => setFirstDialogOpen(false);
    const doActionFirst = () => {
        openSecondDialog();
        closeFirstDialog();
    };
    const openSecondDialog = () => setSecondDialogOpen(true);
    const closeSecondDialog = () => setSecondDialogOpen(false);
    const doActionSecond = () => {
        doSomething();
        closeSecondDialog();
    };

    return (
        <div id="demo-box">
            <div>{"To perform your action click the button below and confirm."}</div>
            <Button onClick={openFirstDialog}>{"Do Action"}</Button>

            <Dialog open={firstDailogOpen}>
                <DialogActions>
                    <DialogContent>{"Are you sure you would like to do the thing?"}</DialogContent>
                    <Button onClick={doActionFirst}>{"Confirm"}</Button>
                    <Button onClick={closeFirstDialog}>{"Cancel"}</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={secondDailogOpen}>
                <DialogActions>
                    <DialogContent>{"Are you REALLY sure you would like to do the thing??"}</DialogContent>
                    <Button onClick={doActionSecond}>{"Confirm"}</Button>
                    <Button onClick={doActionSecond}>{"Cancel"}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};