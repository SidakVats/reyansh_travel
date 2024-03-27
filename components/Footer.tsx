import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/CONSTANT";
import React from "react";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 rounded-t-2xl flexCenter pb-14 pt-20  bg-pattern bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col rounded-xl">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 bg-primary rounded-t-xl">
          <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-32 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
                <FooterColumn
                key={col.title}
                title={col.title}
                >
                  <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                    {col.links.map((link) => (
                      <Link href={"/"} key={link}>
                      {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link href={"/"} key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                      <p>{link.label}:</p><p className="medium-14">{link.value}</p>
                    </Link>
                  ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                    <ul className="flex gap-4">
                      {SOCIALS.links.map((link) => (
                          <Link href={"/"} key={link}>
                            <Image src={link} alt="logo" height={22} width={22} />
                          </Link>
                      ))}
                    </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <p className="regular-14 bg-secondary text-white py-2 px-8 rounded-b-xl flexBetween"><span>@2024 Reyansh Travels</span> <span>All Rights Reserved</span></p>
      </div>
    </footer>



  );
};

type FooterColumn = {
  children: React.ReactNode;
  title: string;
};

const FooterColumn = ({ title, children }: FooterColumn) => {
  return (
   <div>
    <h4 className="pb-3">{title}</h4>
    {children}
   </div>
  );
};

export default Footer;
