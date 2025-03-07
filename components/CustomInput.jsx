import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const CustomInput = ({label, type, placeholder, name, className}) => {
  return (
    <div>
    <Label className="mb-1">{label}</Label>
    <Input
    className={className} 
    type={type}
    placeholder={placeholder}
    name={name}
    minLength="2"
    /></div>
  )
}

export default CustomInput