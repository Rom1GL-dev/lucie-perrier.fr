import React from 'react';
import Image from "next/image";

interface Props {
    alt: string;
    image: string;
    description: React.ReactNode;
    size: number;
}

export default function FooterItem({alt, image, description, size}: Props) {
    return (
            <div className={"flex items-start text-white mb-3"}>
                <Image src={image} title={alt} alt={alt} height={size} width={size} className={"mr-4"}/>
                {description}
            </div>
    );
}