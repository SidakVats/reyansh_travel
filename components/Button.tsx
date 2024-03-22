import Image from "next/image";

type ButtonProps ={
    type: 'Button | submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
   <button className={`flexCenter gap-2 border rounded-full ${variant}`}>
    {icon && <Image src={icon} alt="title" width={20} height={20}/>}
    <label className="whitespace-nowrap cursor-pointer bold-16">{title}</label>
   </button>
  )
}

export default Button
