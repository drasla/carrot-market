"use client";

import { NextPage } from "next";
import Layout from "../../../components/layout";
import { cls } from "../../../libs/utils";
import Message from "../../../components/message";

const ChatDetail: NextPage = () => {
    return (
        <Layout canGoBack={true} title={"Steve"}>
            <div className={cls(["py-10", "pb-16", "px-4", "space-y-4"])}>
                <Message message={"Hi how much are you selling them for?"} />
                <Message message={"I want 20,000KRW"} reversed={true} />
                <Message message={"미쳤어"} />
                <form className={cls(["fixed", "py-2", "bg-white", "bottom-0", "inset-x-0"])}>
                    <div
                        className={cls([
                            "flex",
                            "relative",
                            "max-w-md",
                            "items-center",
                            "w-full",
                            "mx-auto",
                        ])}>
                        <input
                            type={"text"}
                            className={cls([
                                "shadow-md",
                                "rounded-full",
                                "w-full",
                                "border-gray-300",
                                "focus:ring-orange-500",
                                "focus:outline-none",
                                "pr-12",
                                "focus:border-orange-500",
                            ])}
                        />
                        <div
                            className={cls([
                                "absolute",
                                "inset-y-0",
                                "flex",
                                "py-1.5",
                                "pr-1.5",
                                "right-0",
                            ])}>
                            <button
                                className={cls([
                                    "flex",
                                    "focus:ring-2",
                                    "focus:ring-offset-2",
                                    "focus:ring-orange-500",
                                    "items-center",
                                    "bg-orange-500",
                                    "rounded-full",
                                    "px-3",
                                    "hover:bg-orange-600",
                                    "text-sm",
                                    "text-white",
                                ])}>
                                &rarr;
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default ChatDetail;
