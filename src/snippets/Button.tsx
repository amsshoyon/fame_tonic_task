import React from "react"

interface ButtonProps extends React.HTMLProps<HTMLDivElement> {}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={`font-urbanist flex min-w-[313px] items-center justify-center gap-2 rounded-[10px] bg-[#FC004E] px-4 py-1.5 text-xl font-bold uppercase shadow-[2px_2px_10px_0px_#00E7F9] 2xl:py-[9px] 2xl:text-2xl ${className}`}
        >
            <span>{children}</span>
            <svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z'
                    fill='white'
                    stroke='white'
                />
            </svg>
        </button>
    )
}

export default Button
