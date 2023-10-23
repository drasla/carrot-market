'use client'

import { NextPage } from "next";
import Layout from "../../components/layout";
import { cls } from "../../libs/utils";
import Link from "next/link";

const Chats: NextPage = () => {
    return (
        <Layout hasTabBar={true} title={"채팅"}>
            <div className={cls(["divide-y-[1px]"])}>
                {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <Link
                        href={`/chats/${i}`}
                        key={i}
                        className={cls([
                            "flex",
                            "px-4",
                            "cursor-pointer",
                            "py-3",
                            "items-center",
                            "space-x-3",
                        ])}>
                        <div className={cls(["w-12", "h-12", "rounded-full", "bg-slate-300"])} />
                        <div>
                            <p className={cls(["text-gray-700"])}>Steve Jebs</p>
                            <p className={cls(["text-sm", "text-gray-500"])}>
                                See you tomorrow in the corner at 2pm!
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
};

export default Chats;
