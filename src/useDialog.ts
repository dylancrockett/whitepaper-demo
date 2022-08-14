import { useCallback, useMemo, useState } from "react";

type DialogBuilder<T extends any = void, A extends any[] = []> = (close: (value: T) => void, args: A) => React.ReactNode;
type DialogOpener<T extends any = void, A extends any[] = []> = (...args: A) => Promise<T>;

export const useDialog = <T extends any = void, A extends any[] = []>(builder: DialogBuilder<T, A>): [dailog: React.ReactNode, open: DialogOpener<T, A>] => {
    const [isOpen, setIsOpen] = useState(false);
    const [args, setArgs] = useState<A | null>(null);
    const [resolve, setResolve] = useState<(value: T) => void>(() => {});

    const open = useCallback((...args: A) => {
        setIsOpen(true);
        
        return new Promise<T>(resolve => { 
            setArgs(args);
            setResolve((value: T) => { 
                resolve(value);
                setIsOpen(true);
            });
        });
    }, [setIsOpen, setResolve]);

    return useMemo(() => [isOpen && args !== null ? builder(resolve, args) : null, open], [isOpen, args, resolve]);
};