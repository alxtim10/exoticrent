import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navbarTabs } from "@/utils/constants/data";
import { AlignRight } from "lucide-react"
import { useRouter } from "next/navigation";

const HamburgerMenu = () => {

    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <AlignRight />
                </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
                <ul>
                    {navbarTabs.map((data: any, i: any) => {
                        return (
                            <DropdownMenuItem
                                onClick={() => {
                                    router.push(`/${data.link}`);
                                }}
                                className="flex items-center px-4 py-3 hover:bg-[#d6d5d5] transition-all cursor-pointer rounded-md"
                                key={i}
                            >
                                <div>
                                    <h1 className="text-sm font-bold">{data.label}</h1>
                                    <h1 className="text-xs font-extralight">
                                        {data.description}
                                    </h1>
                                </div>
                            </DropdownMenuItem>
                        );
                    })}
                </ul>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HamburgerMenu