"use client"
import Image from "next/image";
import Link from "next/link";
import {getPhoneForm} from "@/lib/utils";
import {observer} from "mobx-react-lite";
import {params} from "@/config/params.config";

export const Banner = observer(() => {
    if(!params.email || !params.phone) return null
    return (
        <header className={"h-11 w-full bg-[#667467] hidden  md:flex items-center justify-center md:justify-start"}>
            <Link href={`mailto:${params.email}`} className={"flex items-center text-white text-xs md:text-sm ml-10 mr-5 md:mr-10"}>
                <Image src={"/icons/mail.svg"} title={"mail"} alt={"mail"} height={25} width={25} className={"mr-2"}/>
                {params.email ?? "Aucun email"}
            </Link>
            <Link href={`tel:${params.phone}`} className={"flex items-center text-white text-xs md:text-sm"}>
                <Image src={"/icons/phone.svg"} title={"phone"} alt={"phone"} height={20} width={20} className={"mr-2"}/>
                {getPhoneForm(params.phone)}
            </Link>
        </header>
    )
})