import { cls } from "../libs/client/utils";

interface MessageProps {
    message: string;
    reversed?: boolean;
    avatarUrl?: string;
}

export default function Message({ message, avatarUrl, reversed }: MessageProps) {
    return (
        <div
            className={cls(
                ["flex", "items-start"],
                reversed ? ["flex-row-reverse"] : ["space-x-2"],
            )}>
            <div className={cls(["w-8", "h-8", "rounded-full", "bg-slate-400"])} />
            <div
                className={cls([
                    "w-1/2",
                    "text-gray-700",
                    "p-2",
                    "border",
                    "border-gray-300",
                    "rounded-md",
                ])}>
                <p>{message}</p>
            </div>
        </div>
    );
}
