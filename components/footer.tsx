import styles from "@/styles/footer.module.css";
import { FC } from "react";
import Link from "next/link"

export type FooterType = {
    className?: string;
};
export const Footer: FC<FooterType> = ({ className }) => {
    return (
        <footer className={['bg-footer-bg text-foreground py-12 md:py-16 lg:py-20', className].join(" ")}>
            <div className={'container text-white mx-auto px-4 md:px-6 lg:px-8'}>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'}>
                    <div className="flex flex-col items-start">
                        <Link href="#" className="mb-4" prefetch={false}>
                            <img
                                className={styles.mysoundNewLogo8}
                                loading="lazy"
                                alt=""
                                src="/mysound-logo.png"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Transform the way you experience music
                        </p>
                    </div>
                </div>
                <div className="mt-12 md:mt-16 lg:mt-20 border-t border-muted pt-6 md:pt-8 lg:pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">&copy; 2024 MySound. All rights reserved.</p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

