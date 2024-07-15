import React from 'react'

export default function ServiceCard({ bg , text}) {
    return (
        <div className='flex  px-2 py-8 gap-6  ' style = {{ boxShadow: "0 4px 4px  rgba(0, 0, 0, 0.17)" }}>
            <span className={`w-[20px] h-[20px] rounded-full mt-4`} style = {{ backgroundColor: `${ bg }` }}></span>
            <p className='flex-1 text-[28px] font-[600] ' style={{ lineHeight: "44px", color: "rgba(0, 0, 0, 0.75)" }}>
               {text}
            </p>
        </div>
    )
}

/* Rectangle 404 */

// position: absolute;
// width: 417px;
// height: 161px;
// left: 1014px;
// top: 1292px;

// background: #FFFFFF;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);

