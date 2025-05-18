import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import React from "react";

export default function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen font-pizza">
            {isLoading && <Loader />}
            <Header />
            <div className="overflow-scroll">
                <main className="max-w-3xl m-auto">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    );
}
