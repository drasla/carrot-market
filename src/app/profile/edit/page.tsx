"use client";

import { NextPage } from "next";
import Layout from "../../../components/layout";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { cls } from "../../../libs/client/utils";

const EditProfile: NextPage = () => {
    return (
        <Layout canGoBack title="Edit Profile">
            <form className={cls(["py-10", "px-4", "space-y-4"])}>
                <div className={cls(["flex", "items-center", "space-x-3"])}>
                    <div className={cls(["w-14", "h-14", "rounded-full", "bg-slate-500"])} />
                    <label
                        htmlFor="picture"
                        className={cls([
                            "cursor-pointer",
                            "py-2",
                            "px-3",
                            "border",
                            "hover:bg-gray-50",
                            "border-gray-300",
                            "rounded-md",
                            "shadow-sm",
                            "text-sm",
                            "font-medium",
                            "focus:ring-2",
                            "focus:ring-offset-2",
                            "focus:ring-orange-500",
                            "text-gray-700",
                        ])}>
                        Change
                        <input id="picture" type="file" className="hidden" accept="image/*" />
                    </label>
                </div>
                <Input required label="Email address" name="email" type="email" />
                <Input required label="Phone number" name="phone" type="number" kind="phone" />
                <Button text="Update profile" />
            </form>
        </Layout>
    );
};

export default EditProfile;
