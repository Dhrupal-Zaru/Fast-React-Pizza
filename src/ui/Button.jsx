import React from "react";
import { Link } from "react-router-dom";

export default function Button({ type, children, disabled, to, onClick }) {
    const base =
        " text-sm inline-block rounded-full tracking-wide font-semibold uppercase bg-orange-400 text-zinc-50 hover:bg-amber-500 focus:outline-none focus:bg-amber-500 focus:ring focus:ring-amber-500 focus:ring-offset-1 disabled:cursor-not-allowed";

    const styles = {
        primary: base + " py-2 px-4 md:px-5 md:py-3",
        small: base + " py-2 px-3 md:px-4 md:py-2 text-xs",
        secondary:
            "py-1.5 px-3 md:px-5 md:py-2.5 text-sm inline-block rounded-full tracking-wide font-semibold uppercase text-orange-400 border-2 border-zinc-400 hover:bg-zinc-400 hover:text-zinc-50 focus:outline-none  focus:ring focus:ring-zinc-400 focus:ring-offset-1 disabled:cursor-not-allowed",
        round :base + " py-1 px-2.5 md:px-3.5 md:py-2 text-sm",
        };
    if (to)
        return (
            <Link className={styles[type]} to="/order/new">
                {children}
            </Link>
        );

    if (onClick)
        return (
            <button onClick={onClick} disabled={disabled} className={styles[type]}>
                {children}
            </button>
        );
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}
