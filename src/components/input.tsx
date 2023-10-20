import { cls } from "../libs/utils";

interface InputProps {
    label: string;
    name: string;
    kind?: "text" | "phone" | "price";

    [key: string]: any;
}

export default function Input({ label, name, kind = "text", ...rest }: InputProps) {
    return (
        <div>
            <label
                className={cls(["mb-1", "block", "text-sm", "font-medium", "text-gray-700"])}
                htmlFor={name}>
                {label}
            </label>
            {kind === "text" ? (
                <div
                    className={cls([
                        "rounded-md",
                        "relative",
                        "flex",
                        "items-center",
                        "shadow-sm",
                    ])}>
                    <input
                        id={name}
                        {...rest}
                        className={cls([
                            "appearance-none",
                            "w-full",
                            "px-3",
                            "py-2",
                            "border-gray-300",
                            "rounded-md",
                            "shadow-sm",
                            "placeholder-gray-400",
                            "focus:outline-none",
                            "focus:ring-orange-500",
                            "focus:border-orange-500",
                        ])}
                    />
                </div>
            ) : null}
            {kind === "price" ? (
                <div
                    className={cls([
                        "rounded-md",
                        "relative",
                        "flex",
                        "items-center",
                        "shadow-sm",
                    ])}>
                    <div
                        className={cls([
                            "absolute",
                            "left-0",
                            "pointer-events-none",
                            "pl-3",
                            "flex",
                            "items-center",
                            "justify-center",
                        ])}>
                        <span className={cls(["text-gray-500", "text-sm"])}>$</span>
                    </div>
                    <input
                        id={name}
                        {...rest}
                        className={cls([
                            "appearance-none",
                            "pl-7",
                            "px-3",
                            "py-2",
                            "border",
                            "border-gray-300",
                            "rounded-md",
                            "shadow-sm",
                            "placeholder-gray-400",
                            "focus:outline-none",
                            "focus:ring-orange-500",
                            "focus:border-orange-500",
                        ])}
                    />
                    <div
                        className={cls([
                            "absolute",
                            "right-0",
                            "pointer-events-none",
                            "pr-3",
                            "flex",
                            "items-center",
                        ])}>
                        <span className={cls(["text-gray-500"])}>KRW</span>
                    </div>
                </div>
            ) : null}
            {kind === "phone" ? (
                <div className={cls(["flex", "rounded-md", "shadow-sm"])}>
                    <span
                        className={cls([
                            "flex",
                            "items-center",
                            "justify-center",
                            "px-3",
                            "rounded-l-md",
                            "border",
                            "border-r-0",
                            "border-gray-300",
                            "bg-gray-50",
                            "text-gray-500",
                            "select-none",
                            "text-sm",
                        ])}>
                        +82
                    </span>
                    <input
                        id={name}
                        {...rest}
                        className={cls([
                            "appearance-none",
                            "w-full",
                            "px-3",
                            "py-2",
                            "border",
                            "border-gray-300",
                            "rounded-md",
                            "rounded-l-none",
                            "shadow-sm",
                            "placeholder-gray-400",
                            "focus:outline-none",
                            "focus:ring-orange-500",
                            "focus:border-orange-500",
                        ])}
                    />
                </div>
            ) : null}
        </div>
    );
}
