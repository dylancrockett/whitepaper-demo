import { Button, Dialog, DialogContent, DialogActions } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { useDialog } from "./useDialog";

const doSomething = () => {};

export const ComplexDeclarativeDialogDemo = () => {
    const [dialog, confirm] = useDialog<boolean, [string]>((close, [message]) => (
        <Dialog open>
            <DialogActions>
                <DialogContent>{message}</DialogContent>
                <Button onClick={() => close(true)}>{"Confirm"}</Button>
                <Button onClick={() => close(false)}>{"Cancel"}</Button>
            </DialogActions>
        </Dialog>
    ));

    const doAction = async () => {
        if (await confirm("Are you sure you would like to do the thing?")) {
            if (await confirm("Are you REALLY sure you would like to do the thing?")) doSomething();
        };
    };

    return (
        <div id="demo-box">
            <div>{"To perform your action click the button below and confirm."}</div>
            <Button onClick={doAction}>{"Do Action"}</Button>

            {dialog}
        </div>
    );
};