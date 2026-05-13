import IconTag from "../components/iconTag";
import iconData from "../data/contactIconData.json"
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-wrap w-full justify-around mt-2">
                {iconData.map((icon) => (
                    <Link
                        key={icon.title}
                        href={icon.link}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-mono"
                    >
                        <IconTag iconData={icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}