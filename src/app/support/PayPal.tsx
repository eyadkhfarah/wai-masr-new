"use client"

import React, { useState } from 'react'

export default function PayPal() {
    const [number, setNumber] = useState(1.62)
  return (
    <>
    {/* <div className="flex gap-4 justify-around">
			<button
				className={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					number === 0.32 ? 'bg-primary text-black' : ''
				} `}
				onClick={() => (number = 0.32)}
			>
				10 جنيه
			</button>
			<button
				onClick={() => {
					number = 1.62;
				}}
				className:text-black={number === 1.62}
				className={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					number === 1.62 ? 'bg-primary' : ''
				} `}
				onClick={() => (number = 1.62)}
			>
				50 جنيه
			</button>
			<button
				onClick={() => {
					number = 3.24;
				}}
				className:text-black={number === 3.24}
				className={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					number === 3.24 ? 'bg-primary' : ''
				} `}
				onClick={() => (number = 3.24)}
			>
				100 جنيه
			</button>
		</div> */}
		{/* <div id="paypal-button-container" Class="z-0 h-fit" />
		<div className="flex gap-4 items-start h-fit bg-primary rounded-md p-3">
			<Icon src={AiOutlineExclamationCircle} size="30"/>
			<div className="grid gap-3">
				<h3 className="m-0">ملحوظة</h3>
				<p className="m-0">
					احنا بنستخدم نظام الدفع لمنتج وتوصيله لان خدمة التبرع عن طريق paypal غير متاحة في مصر
				</p>
			</div>
		</div> */}
        </>
  )
}
